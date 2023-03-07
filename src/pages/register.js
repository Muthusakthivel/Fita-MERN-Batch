import React, {useState} from "react";


const RegisterPage = () => {

    let[register, setRegister] = useState({
        userName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        hobbies: [],
        address: "",
        qualification: ""
    });
    let [formError, setFormError] = useState({
        userName: false,
        email: false,
        password: false,
        dateOfBirth: false,
        gender: false,
        hobbies: false,
        address: false,
        qualification: false
    });
    let [accountList, setAccountList] = useState([]);
    const submitRegister = () => {
        console.log(register);
        setFormError({
            userName: register.userName === '' ? true : false,
            email: register.email === '' ? true : false,
            password: register.password === '' ? true : false,
            dateOfBirth: register.dateOfBirth === '' ? true : false,
            gender: register.gender === '' ? true : false,
            hobbies: register.hobbies === '' ? true : false,
            address: register.address === '' ? true : false,
            qualification: register.qualification === '' ? true : false
        });
        setAccountList([...accountList, register])
    }

    const handleFormInput = (event) => {
        if(event.target.name === 'hobbies'){
            // console.log(event.target.checked);
         if(event.target.checked){
            register.hobbies.push(event.target.value);
         }else{
            const index = register.hobbies.indexOf(event.target.value);
            register.hobbies.splice(index, 1);
         }
            setRegister({...register, hobbies: register.hobbies})
        }else{
       setRegister({...register, [event.target.name] : event.target.value })
        }
    }

    return <div>
        <h1>Register Page</h1>
        <div className="space">
        <label>Enter Your Name :</label>
        <input type="text" placeholder="Enter your name" className={formError.userName ? "register-input input-error" : "register-input"} onChange={handleFormInput} name="userName"/>
        {formError.userName && <p className='error'>Please enter a valid user name</p>}
        </div>
        <div className="space">
        <label>Enter Your Email ID :</label>
        <input type="email" placeholder="Enter your Email ID" className={formError.email ? "register-input input-error" : "register-input"} onChange={handleFormInput} name="email"/>
        {formError.email && <p className='error'>Please enter a valid email</p>}
        </div>
        <div className="space">
        <label>Enter Your Password :</label>
        <input type="password" placeholder="Enter your Email Password" className="register-input" onChange={handleFormInput} name="password"/>
        {formError.password && <p className='error'>Please enter a password</p>}
        </div>
        <div className="space">
        <label>Select Your DOB :</label>
        <input type="date"  className="register-input" onChange={handleFormInput} name="dateOfBirth"/>
        {formError.dateOfBirth && <p className='error'>Please select a date of birth</p>}
        </div>
        <div className="space">
        <label>Select Your Gender :</label>
        <input type="radio" name="gender" onChange={handleFormInput} value="Male"/>Male
        <input type="radio" name="gender" onChange={handleFormInput} value="Female"/>Female
        <input type="radio" name="gender" onChange={handleFormInput} value="Others"/>Others
        {formError.gender && <p className='error'>Please select any one gender</p>}
        </div>
        <div className="space">
        <label className="register-table">Select Your Hobbies :</label>
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Cricket"/>Cricket
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Football"/>Football
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Badminton"/>Badminton
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Volleyball"/>Volleyball
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Hockey"/>Hockey
        <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Carrom"/>Carrom
        {formError.hobbies && <p className='error'>Please select any one hobbies</p>}
        </div>
        <div className="space">
            <label> Enter Your Address :</label>
            <textarea placeholder="Enter your Address" className="register-input" name="address" onChange={handleFormInput}></textarea>
            {formError.address && <p className='error'>Please enter your address</p>}
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
           {formError.qualification && <p className='error'>Please Select any one qualification</p>}
        </div>
        <div className="space">
            <button onClick={() => submitRegister()}>Create Your Account</button>
        </div>
        <div style={{"height": "600px"}}>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Address</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                <tbody>
                    {accountList?.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>{value.userName}</td>
                                <td>{value.email}</td>
                                <td>{value.dateOfBirth}</td>
                                <td>{value.gender}</td>
                                <td>{value.hobbies}</td>
                                <td>{value.address}</td>
                                <td>{value.qualification}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
} 
export default RegisterPage;