import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "./pages/HomePage";

const route=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            }
        ]
    }
])

export default route;

