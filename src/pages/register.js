import React, {useState} from "react";

const RegisterPage = () => {

    let[register, setRegister] = useState({
        userName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        hobbies: "",
        address: "",
        qualification: ""
    });
    const submitRegister = () => {
        console.log(register);
    }

    const handleFormInput = (event) => {
       setRegister({...register, [event.target.name] : event.target.value })
    }

    return <div>
        <div className="space">
        <label>Enter Your Name :</label>
        <input type="text" placeholder="Enter your name" className="register-input" onChange={handleFormInput} name="userName"/>
        </div>
        <div className="space">
        <label>Enter Your Email ID :</label>
        <input type="email" placeholder="Enter your Email ID" className="register-input" onChange={handleFormInput} name="email"/>
        </div>
        <div className="space">
        <label>Enter Your Email Password :</label>
        <input type="password" placeholder="Enter your Email Password" className="register-input" onChange={handleFormInput} name="password"/>
        </div>
        <div className="space">
        <label>Select Your DOB :</label>
        <input type="date"  className="register-input" onChange={handleFormInput} name="dateOfBirth"/>
        </div>
        <div className="space">
        <label>Select Your Gender :</label>
        <input type="radio" name="gender" onChange={handleFormInput} value="Male"/>Male
        <input type="radio" name="gender" onChange={handleFormInput} value="Female"/>Female
        <input type="radio" name="gender" onChange={handleFormInput} value="Others"/>Others
        </div>
        <div className="space">
        <label className="register-table">Select Your Hobbies :</label>
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Cricket"/>Cricket
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Football"/>Football
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Badminton"/>Badminton
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Volleyball"/>Volleyball
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Hockey"/>Hockey
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Carrom"/>Carrom
        </div>
        <div className="space">
            <label> Enter Your Address :</label>
            <textarea placeholder="Enter your Address" className="register-input" name="address" onChange={handleFormInput}></textarea>
        </div>
        <div className="space">
            <label className="register-label">Select Your Higher Qualification :</label>
            <select className="register-input" defaultValue={""} name="qualification" onChange={handleFormInput}>
                <option disabled value="">Please Select Your Qualification</option>
                <option>Under Graduate</option>
                <option>Post Graduate</option>
                <option>Engineering Degree</option>
                <option>Diploma Degree</option>
                <option>Master Degree</option>
            </select>
        </div>
        <div className="space">
            <button onClick={() => submitRegister()}>Create Your Account</button>
        </div>
    </div>
} 
export default RegisterPage;