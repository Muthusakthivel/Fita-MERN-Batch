import React from "react";
import axios from "axios";

const UserPage = () => {
    const loadProfiles = () =>{
        const api_url = 'https://reqres.in/api/users?page=2';

        axios.get(api_url)
        .then((response) => {
            // console.log(response)
            let serverData = response.data;
            console.log(serverData)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    return(
        <div>
            <h1>List of Users</h1>
            <button onClick={() => loadProfiles()}>Load User Profiles</button>
        </div>
    )
}
export default UserPage;

//  Types of API Methods
// 1. GET - To read information from server
// 2. POST - To submit information to server(Create)
// 3. PUT - To Submit information to server(update)
// 4. DELETE - To Delete information from server