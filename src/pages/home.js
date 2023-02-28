import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const moveToTrash = () => {
        navigate("/mail/trash");
    }
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
            <br></br>
            <button onClick={() => moveToTrash()}> Move to Trash</button>
        </div>
    )
}
export default HomePage;