import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../components/login/LogIn";
import HomePage from "../pages/HomePage";
import Registration from "../components/registration/Registration";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import ChefRecipePage from "../pages/ChefRecipePage";
import PrivateRouter from "./PrivateRouter";

const route=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>,
                loader:()=>fetch("https://foodzoon.vercel.app/alldata")
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            }
            ,
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/details/:id",
                element:<PrivateRouter><ChefRecipePage title="Details"></ChefRecipePage></PrivateRouter>,
                loader:({params})=> fetch(`https://foodzoon.vercel.app/alldata/${params.id}`)
            },
            {
                path:"/blog",
                element:<BlogPage></BlogPage>
            }
        ]
    }
])

export default route;

