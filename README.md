# Blog Posting Application

A blog posting application built with React, TypeScript, Firebase Authentication, and Cloud Firestore. Users can create, view, edit, and delete their own blog posts with protected authentication and authorization.

## Features

* User signup and login
* Firebase Authentication
* Protected and public routes
* Create, read, update, and delete blog posts
* View all blog posts
* View individual blog posts
* View only the current user's blogs
* Edit and delete own blogs
* React Hook Form validation
* Loading spinner
* Toast notifications
* Delete confirmation dialog
* TypeScript type safety
* Responsive UI

## Tech Stack Used

* React
* TypeScript
* Vite
* React Router DOM
* Firebase Authentication
* Cloud Firestore
* React Hook Form
* React Toastify
* SweetAlert2
* CSS

## Routing

| Route            | Access    | Description        |
| ---------------- | --------- | ------------------ |
| `/`              | Public    | View all blogs     |
| `/login`         | Public    | Login              |
| `/signup`        | Public    | Create an account  |
| `/blog/:id`      | Public    | View a single blog |
| `/add-blog`      | Protected | Create a blog      |
| `/my-blogs`      | Protected | View user's blogs  |
| `/edit-blog/:id` | Protected | Edit a blog        |

### Route Protection

`ProtectedRoute` allows only authenticated users to access protected pages. Unauthenticated users are redirected to `/login`.

`PublicRoute` is used for login and signup pages. Authenticated users are redirected to the home page if they try to access these pages.

## Blog Data Model

Blog posts are stored in the Firestore `blogs` collection.

```text
blogs/{blogId}

{
  title: string
  content: string
  authorId: string
  authorName: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

`authorId` is used to identify the owner of a blog and control edit/delete operations.

## Project Structure

```text
src/
├── components/
├── context/
├── hooks/
├── interfaces/
├── pages/
├── routes/
├── services/
├── App.tsx
└── main.tsx
```

The application separates UI components, pages, authentication logic, Firebase services, routes, and TypeScript interfaces for better maintainability.

## Installation

Clone the repository:

```bash
git clone <repository-url>
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

## Firebase Setup

Create a Firebase project and enable:

* Firebase Authentication
* Cloud Firestore

Add your Firebase configuration to the project and configure the required environment variables.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Future Improvements

* Pagination or infinite scrolling
* Search and filtering
* Image uploads
* Comments and likes
* Rich text editor
* User profiles
* Firestore Security Rules
* Automated testing
* Deployment

## License

This project is built for learning and portfolio purposes.
