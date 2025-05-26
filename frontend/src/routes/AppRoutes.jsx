import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => { //router 
    return (
        <Router>
            <PublicRoutes />
            <PrivateRoutes />
        </Router>
    );
};
export default AppRoutes;