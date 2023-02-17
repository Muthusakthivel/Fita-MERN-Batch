import React, {useState} from "react";

// ES6

const SimpleFormSubmition = () => {

    // let [variableName, functionName] = useState(initialValue);

    let [userName, setUserName] = useState("");

    let message = "Hi there! Good Morning"
    // let userName;

    let student_information = {
        name: "Santhosh",
        course: "Full Stack",
        career: "IT",
        mob: "123456789"
    }

    const onSubmitForm = () => {
        alert("Submitted successfully")
    };

    const onHandleInput = (event) => {
        setUserName(event.target.value);
        // console.log(userName);
        // userName = event.target.value;
        // console.log(event);
        // console.log(event.target.value);
        // console.log(userName);
        // console.log(event.target.value, event.target.id);
    };
    return(
     <div>
        {/* <h1>This is a simple Form</h1> */}
        <h1>{message}</h1>
        <h2>The UserName is {userName}</h2>
        <h1>Student Info <h2>{student_information.name}</h2><h2>{student_information.course}</h2></h1>
        <div className="space">
            <label className="label">Enter Your Email ID</label>
            <input type='email' placeholder='Enter your email' name="email" id="userName"  onChange={onHandleInput} />
        </div>
        <div className="space">
            <label className="label">Enter Your Password</label>
            <input type='password'  placeholder='Enter your Password' onChange={onHandleInput} id="password"/>
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
