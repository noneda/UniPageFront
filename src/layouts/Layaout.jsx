import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Header from "./Adds/Header";
import Footer from "./Adds/Footer";
import NoLoad from "./Adds/NoLoad";

const Layout = () => {
    const location  = useLocation();
    const isLoading = location.state?.loading;

    return (
        <>
            <Header/>
            <main className="Main">
                {isLoading ? <NoLoad/> : <Outlet/>}
            </main>
            <Footer/>
        </>
    )
}


export default Layout;