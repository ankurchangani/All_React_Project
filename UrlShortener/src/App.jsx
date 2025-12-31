import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import AppLayout from "./layouts/app-layout"
import Dashboard from "./pages/dashboard"
import Link from "./pages/link"
import RedirectLink from "./pages/redirect-link"
import Auth from "./pages/auth"
import LandingPage from "./pages/landing"
function App() {
const router = createBrowserRouter([
  {
    element  : <AppLayout/> , 
    children : [
      {
        path : '/' , 
        element : <LandingPage/>
      } , 
      {
        path : '/dashboard' , 
        element : <Dashboard/>
      } , 
      {
        path : '/auth' , 
        element : <Auth/>
      } ,

      {
        path : '/link/:id' , 
        element : <Link/>
      } , 
      {
        path : '/redirect/:id' , 
        element : <RedirectLink/>
      }
    ]
  }
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
