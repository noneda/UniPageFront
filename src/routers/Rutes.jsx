// * Pages
import Home from "../pages/Home";

//* Layouts

import Layout from "../layouts/Layaout";

// * Components
import Error from "../components/Error";


const Rutes = [
    {
        path: "/",
        element : <Layout/>,
        errorElement : <Error/>,
        children : [
            {
                index : true,
                element : <Home/>
            }
        ]
        
    }
];

export default Rutes;