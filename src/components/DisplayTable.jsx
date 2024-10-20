import React from "react";

export default function DisplayTable(props){

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Breed</th>
                        <th>Adopter Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.formSubmissions.map((d, i)=>
                        <tr key={i}>
                            <th>{d.petName}</th>
                            <th>{d.petType}</th>
                            <th>{d.breed}</th>
                            <th>{d.name}</th>
                            <th>{d.email}</th>
                            <th>{d.phone}</th>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className="go-back-btn" onClick={props.goBack}>Go Back</button>
        </>
    )
}