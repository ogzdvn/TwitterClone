import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import ErrorPage from "../pages/error-page/error-page";
import MainLayout from "../layouts/main";

const routes = createBrowserRouter([
    {
     path:"/",
     element:<MainLayout/>,
     children:[
        {
            index:true,
            element:<HomePage/>
        },
        
    {
        path:"explore",
        element:<Explore/>
    },
    {
        path:"notifications",
        element:<Notifications/>
    },
    {
        path:"*",
        element:<ErrorPage/>
    },

        
     ]
    },
    
        
    
])

export default routes
    