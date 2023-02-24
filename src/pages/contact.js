import React from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => {
    return(
        <div>
            <h1>This is Contact Page</h1>
            <NavLink to="/">Go to Home Page</NavLink>
            <br></br>
            <NavLink to="/about-us">About Us</NavLink>
        </div>
    )
}
export default ContactPage;