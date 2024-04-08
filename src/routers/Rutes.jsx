// * Pages
import Home from "../pages/Home";
import Login from "../pages/User/Login";
import Perfil from "../pages/User/Perfil";

//* Layouts

import Layout from "../layouts/Layaout";

// * Components
import Error from "../components/Error";


const Rutes = [
    {
        path: "/",
        element : <Login/>,
        errorElement : <Error/>,
    },
    {
        path : "/home",
        element : <Layout/>,
        errorElement : <Error/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path: "perfil",
                element : <Perfil/>
            }
        ]
        
    }
];

export default Rutes;