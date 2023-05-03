import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import LogIn from "../components/login/LogIn";
import HomePage from "../pages/HomePage";
import Registration from "../components/registration/Registration";
import DetailsPages from "../pages/DetailsPages";

const route=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>,
                loader:()=>fetch("http://localhost:5000/alldata")
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
                element:<DetailsPages title="Details"></DetailsPages>,
                loader:({params})=> fetch(`http://localhost:5000/alldata/${params.id}`)
            }
        ]
    }
])

export default route;

