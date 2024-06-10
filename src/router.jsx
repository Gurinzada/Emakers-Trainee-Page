import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from './Components/Register/RegisterPage'
import LoginPage from "./Components/LoginPage/LoginPage"
import UserPage from './Components/SocialPage/UserPage'
import PrivateRoute from './Components/Parts/PrivateRoute'

const router = createBrowserRouter([
    {
        path:"/",
        element:<RegisterPage/>,
    },{
        path:"/login",
        element:<LoginPage/>
    },{
        path:"/social/:id",
        element:<PrivateRoute><UserPage/></PrivateRoute>
    }
])



export default router