import React, { useState } from "react";
import InpH from "./inpH";

export default function FormBox(props){
    const [formData, setFormData]=useState({
        petName: "", 
        petType: "",
        breed: "", 
        name: "",
        email: "",
        phone: "",
    })
    const [errors, setErrors]=useState({})

    function handleChange(f){
        const { name, value }=f.target;
        setFormData((prevFormData)=>({...prevFormData, 
            [name]: value
        }))

        handleValidation(name, value)
    }

    function handleValidation(name, value){
        let error=""
        if (name==="petName" || name ==="breed" || name==="name"){
            if (value.length<3){
                error=`${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1")} must be at least 3 character long!`
            }
        }
        if (name==="email"){
            const regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!regexEmail.test(value)){
                error="Invalid Email!"
            }
        }
        if (name==="phone" && value.length!==10){
            const regexNum=/^\d{10}$/
            if (!regexNum.test(value)){
                error="Please enter a valid 10-digit phone number!"
            }  
        }

        setErrors((prevErrors)=>({...prevErrors, 
            [name]: error
        }))
    }

    function submit(){
        const errorThere=Object.values(errors).some(e=>e!=="");
        if (!errorThere){
            const { petName, petType, breed, name, email, phone }=formData
            if ((petName&&petType&&breed&&name&&email&&phone)!=""){
                props.handleSubmission(formData);
                setFormData({
                    petName: "",
                    petType: "",
                    breed: "",
                    name: "",
                    email: "",
                    phone: ""
                })
                setErrors({})
            }else{
                alert("Please fill all the details!")
            }
        }else{
            alert("Please fix your details")
        }
        
    }

    return(
        <>
            <div className="form-container">
                <InpH head="Pet Name" placeholder="Pet Name" value={formData.petName} setValue={handleChange}  name="petName" error={errors.petName}/>
                <InpH head="Pet Type" select={true} value={formData.petType} setValue={handleChange} name="petType"/>
                <InpH head="Breed" placeholder="Breed" value={formData.breed} setValue={handleChange} name="breed" error={errors.breed}/>
                <InpH head="Your Name" placeholder="Your Name" value={formData.name} setValue={handleChange} name="name" error={errors.name}/>
                <InpH head="Email" placeholder="Email" value={formData.email} setValue={handleChange} name="email" error={errors.email}/>
                <InpH head="Phone" placeholder="Phone" value={formData.phone} setValue={handleChange} name="phone" error={errors.phone}/>
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )
}