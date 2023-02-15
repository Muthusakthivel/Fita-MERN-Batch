import React from "react";

// ES6

const SimpleFormSubmition = () => {

    let message = "Hi there! Good Morning"

    const onSubmitForm = () => {
        alert("Submitted successfully")
    };
    return(
     <div>
        {/* <h1>This is a simple Form</h1> */}
        <h1>{message}</h1>
        <div className="space">
            <label className="label">Enter Your Email ID</label>
            <input type='email' placeholder='Enter your email'/>
        </div>
        <div className="space">
            <label className="label">Enter Your Password</label>
            <input type='password' placeholder='Enter your Password'/>
        </div>
        <div className="space">
            <button onClick={ () => onSubmitForm()}>Submit Form</button>
        </div>
     </div>
    )
}
export default SimpleFormSubmition;

// ES5
// function SimpleFormSubmition (){
//     return(
//         <div></div>
//     )
// }
