import React from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
    const location = useLocation()
    console.log(location);

    var state = location?.state;
    var account = state?.account_data;
    var server = state?.server_data;
    return(
        <div>
            <h1>This is a About Page {account?.email}</h1>
            <h1>This is a About Page {account?.password}</h1>
            <h3>ID No - {server?.id}</h3>
            <h3>Token No - {server?.token}</h3>
        </div>
    )
}
export default AboutPage;