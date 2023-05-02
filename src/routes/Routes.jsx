import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import LogIn from "../components/login/LogIn";
import HomePage from "../pages/HomePage";
import Registration from "../components/registration/Registration";

const route=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            }
            ,
            {
                path:"/registration",
                element:<Registration></Registration>
            }
        ]
    }
])

export default route;

