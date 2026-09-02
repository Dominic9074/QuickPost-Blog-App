# Blog Posting Application

A modern blog posting application built with React, TypeScript, Firebase Authentication, and Cloud Firestore. The application allows authenticated users to create, view, edit, and delete their own blog posts while providing protected navigation and a clean user experience.

## Overview

This project was built to practice and demonstrate modern React development patterns, including:

* React Router DOM
* Context API for global authentication state
* Custom hooks
* Protected and guest routes
* React Hook Form
* Firebase Authentication
* Cloud Firestore
* CRUD operations
* TypeScript type safety
* Reusable components
* Loading and error states
* Toast notifications
* Confirmation dialogs

## Features

### Authentication

* User registration
* User login
* User logout
* Firebase Authentication integration
* User display name support
* Persistent authentication state
* Global authentication context

### Blog Management

* Create new blog posts
* View all blog posts
* View individual blog posts
* Edit own blog posts
* Delete own blog posts
* View only the currently authenticated user's blogs
* Store author information with each blog
* Store creation and update timestamps

### Authorization

The application implements route-level authentication:

* `ProtectedRoute` prevents unauthenticated users from accessing protected pages.
* `GuestRoute` prevents authenticated users from accessing login and registration pages.
* Blog ownership is checked before updating or deleting posts.

Firestore Security Rules should also be used to enforce authorization at the database level.

### User Experience

* Loading spinner while authentication or data is loading
* Toast notifications for success and error states
* Confirmation dialog before deleting a blog
* Form validation
* Responsive blog cards
* Clean and reusable UI components

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router DOM
* React Hook Form
* Context API

### Backend / Database

* Firebase Authentication
* Cloud Firestore

### UI / Utilities

* React Toastify
* SweetAlert2
* CSS

## Project Structure

```text
src/
├── components/
│   ├── BlogCard/
│   ├── Loader/
│   └── Navbar/
│
├── context/
│   └── AuthContext/
│
├── hooks/
│   └── userAuth.ts
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Signup/
│   ├── CreateBlog/
│   ├── SingleBlog/
│   └── MyBlogs/
│
├── routes/
│   ├── ProtectedRoute/
│   └── GuestRoute/
│
├── services/
│   ├── authServices.ts
│   └── blogServices.ts
│
├── interfaces/
│   └── BlogInterface.ts
│
├── firebase/
│   └── firebaseConfig.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Blog Data Model

Blog documents are stored in the `blogs` collection in Firestore.

```text
blogs/{blogId}

{
  id: string
  title: string
  content: string
  authorId: string
  authorName: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### Field Description

| Field        | Description                     |
| ------------ | ------------------------------- |
| `id`         | Unique Firestore document ID    |
| `title`      | Blog title                      |
| `content`    | Blog content                    |
| `authorId`   | Firebase UID of the blog author |
| `authorName` | Display name of the author      |
| `createdAt`  | Blog creation timestamp         |
| `updatedAt`  | Last modification timestamp     |

## Routing

The application uses React Router DOM for client-side routing.

Example routes:

```text
/                       Home
/login                  Login
/signup                 Registration
/blogs/add              Create Blog
/blogs/:id              View Blog
/edit-blog/:id          Edit Blog
/my-blogs               Current User's Blogs
```

Protected routes are wrapped with `ProtectedRoute`:

```tsx
<Route
  path="/my-blogs"
  element={
    <ProtectedRoute>
      <MyBlogs />
    </ProtectedRoute>
  }
/>
```

Guest-only pages can be wrapped with `GuestRoute`:

```tsx
<Route
  path="/login"
  element={
    <GuestRoute>
      <Login />
    </GuestRoute>
  }
/>
```

## Authentication Flow

The authentication state is managed globally using Context API.

```text
Firebase Authentication
        |
        v
   AuthContext
        |
        v
     useAuth()
        |
        v
React Components
```

The application uses Firebase's authentication state listener to determine whether a user is logged in.

While Firebase is checking the authentication state:

```text
loading = true
        |
        v
     Loader
```

Once authentication is resolved:

```text
loading = false
        |
        +---- user exists ----> Protected Page
        |
        +---- user missing ---> Login
```

## CRUD Flow

### Create

```text
Create Blog Form
      |
      v
React Hook Form
      |
      v
blogServices
      |
      v
Cloud Firestore
```

### Read

```text
Cloud Firestore
      |
      v
blogServices
      |
      v
React State
      |
      v
Blog Components
```

### Update

Before updating a blog, the application verifies that the currently authenticated user owns the blog.

```text
Current User UID
      |
      v
Compare with authorId
      |
      +---- Match ----> Update Blog
      |
      +---- No Match -> Throw Authorization Error
```

### Delete

Deleting a blog requires confirmation before the Firestore document is removed.

```text
Delete Button
      |
      v
Confirmation Dialog
      |
      +---- Cancel ----> No action
      |
      +---- Confirm ---> Delete Firestore Document
```

## Form Validation

React Hook Form is used for form handling and validation.

The application validates fields such as:

* Required title
* Required content
* Valid email address
* Password requirements
* Password confirmation

Validation errors are displayed next to the relevant form fields.

## Error Handling

The application uses `try/catch` blocks for asynchronous Firebase operations.

Example:

```tsx
try {
  await updateBlog(id, title, content, user.uid);
  toast.success("Blog updated successfully");
} catch (error) {
  console.error(error);
  toast.error("Error updating blog");
}
```

Technical errors are logged for development while user-friendly messages are displayed through toast notifications.

## Loading States

Loading states are used when asynchronous operations are in progress.

For example:

```tsx
if (loading) {
  return <Loader />;
}
```

The reusable `Loader` component provides a centered spinner while data or authentication is being resolved.

## Firebase Configuration

Create a Firebase project and enable:

1. Firebase Authentication
2. Cloud Firestore

Then create a Firebase configuration file.

Example:

```tsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Firebase configuration
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

For production applications, Firebase configuration and environment-specific values should be managed using environment variables.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd blog-posting-application
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Required Packages

The project uses the following main dependencies:

```bash
npm install react-router-dom firebase react-hook-form react-toastify sweetalert2
```

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Security Considerations

Client-side authorization checks improve the user experience but should not be considered the primary security mechanism.

Firestore Security Rules should enforce ownership at the database level.

For example, blog updates and deletes should only be allowed when:

```text
request.auth.uid == resource.data.authorId
```

The exact rules should be configured according to the application's requirements.

## Future Improvements

Potential improvements include:

* Pagination or infinite scrolling
* Search functionality
* Blog categories and tags
* Rich text editor
* Image uploads
* User profile pages
* Comments
* Likes
* Sorting and filtering
* Firestore Security Rules
* Automated testing
* Deployment with Firebase Hosting or another hosting provider

## Learning Objectives

This project demonstrates practical usage of:

* Component-based architecture
* TypeScript with React
* React hooks
* Context API
* Custom hooks
* Client-side routing
* Protected routes
* Guest routes
* Form management
* Firebase Authentication
* Firestore CRUD operations
* Async/await and error handling
* Reusable components
* State management
* Conditional rendering
* Loading states
* Authorization concepts

## License

This project is intended for learning and demonstration purposes.
