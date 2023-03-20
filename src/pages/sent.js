import React from "react";
import { useSelector } from "react-redux";

const SentPage = () => {
    const userDataFromStore = useSelector((state) => state?.AppReducer?.userList)

    console.log(userDataFromStore);
    return(
        <div>
            <h1>This is Sent Page</h1>
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
                    {userDataFromStore?.map((value, index) => {
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
    )
}
export default SentPage;