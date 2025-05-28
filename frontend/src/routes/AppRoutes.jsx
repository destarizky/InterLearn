import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ScrollToTop from '@/components/public/HomePage/ScrollToTop';
const AppRoutes = () => { //router 
    return (
        <Router>
            <ScrollToTop />
            <PublicRoutes />
            <PrivateRoutes />
        </Router>
    );
};
export default AppRoutes;