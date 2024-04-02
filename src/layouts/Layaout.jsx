import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Header from "./Adds/Header";
import Footer from "./Adds/Footer";
import NoLoad from "./Adds/NoLoad";
import SlideBar from "./Adds/SlideBar";

const Layout = () => {
    const location  = useLocation();
    const isLoading = location.state?.loading;

    return (
        <>
            <Header/>
            <SlideBar/>
            <main className="Main">
                {isLoading ? <NoLoad/> : <Outlet/>}
            </main>
            <Footer/>
        </>
    )
}


export default Layout;