import './App.css'
import { ToastContainer } from 'react-toastify'


import AppRouter from './routes/appRouter'


function App() {

  return (
    <>
      <AppRouter />
      <ToastContainer/>
    </>
  )
}

export default App
