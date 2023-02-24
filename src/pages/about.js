import React from "react";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
    return(
        <div>
            <h1>This is About Page</h1>
            <NavLink to="/mail">Go to Mail Page</NavLink>
            <br></br>
            <NavLink to="/about-us">About Us</NavLink>
        </div>
    )
}
export default AboutPage;