import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from "./Components/LoginPage/LoginPage"

const router = createBrowserRouter([
    {
        path:"/",
        element:<RegisterPage/>,
    },{
        path:"/login",
        element:<LoginPage/>
    }
])



export default router