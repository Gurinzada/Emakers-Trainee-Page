import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from "./Components/LoginPage/LoginPage"
import UserPage from './Components/SocialPage/UserPage'

const router = createBrowserRouter([
    {
        path:"/",
        element:<RegisterPage/>,
    },{
        path:"/login",
        element:<LoginPage/>
    },{
        path:"/social",
        element:<UserPage/>
    }
])



export default router