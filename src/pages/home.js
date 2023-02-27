import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h1>This is Home Page</h1>
            <NavLink to="/contact">Go to Contact Page</NavLink>
            <br></br>
            <NavLink to="/about-us">About Us</NavLink>
            <br></br>
            <NavLink to="/mail">Go To Mail Box</NavLink>
            <br></br>
            <NavLink to="/register">Sign Up</NavLink>
            
        </div>
    )
}
export default HomePage;