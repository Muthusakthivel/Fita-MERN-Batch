import React, {useState, useEffect} from "react";
import axios from "axios";

const UserPage = () => {

    let [profiles, setProfiles] = useState();

    useEffect(() => {
        loadProfiles(1);
    }, [])

    const loadProfiles = (pageNumber) =>{
        const api_url = 'https://reqres.in/api/users?page=' + pageNumber;

        axios.get(api_url)
        .then((response) => {
            console.log(response.data)
            let serverData = response.data;
            setProfiles(serverData.data);
        })
        .catch((e) => {
            console.log(e)
        })
    }
    return(
        <div>
            <h1>List of Users</h1>
            <button onClick={() => loadProfiles()}>Load User Profiles</button>
            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Profile Pic</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        profiles?.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.first_name} {value.last_name}</td>
                                    <td>{value.email}</td>
                                    {/* <td>{value.avatar}</td> */}
                                    <td>
                                        <img src={value.avatar} alt="profile"/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    { profiles?.length === 0 &&
                     <tr>
                        <td colSpan={4}>No Record Available</td>
                    </tr>}
                </tbody>
            </table>
            <div>
                <button onClick={() => loadProfiles(1)}>Page1</button>
                <button onClick={() => loadProfiles(2)}>Page2</button>
                <button onClick={() => loadProfiles(3)}>Page3</button>
            </div>
        </div>
    )
}
export default UserPage;

//  Types of API Methods
// 1. GET - To read information from server
// 2. POST - To submit information to server(Create)
// 3. PUT - To Submit information to server(update)
// 4. DELETE - To Delete information from server