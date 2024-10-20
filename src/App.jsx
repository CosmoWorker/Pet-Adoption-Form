import React, { useState } from "react";
import Header from "./components/Header";
import FormBox from "./components/FormBox";
import DisplayTable from "./components/DisplayTable";

export default function App() {

  const [submitted, setSubmitted]=useState(false)
  const [formSubmissions, setFormSubmissions]=useState([]);

  function handleSubmission(d){
    setFormSubmissions((prevSubmission)=>([...prevSubmission, d]))
    setSubmitted(true)
  }

  const goBack=()=>{
    setSubmitted(false)
  }

  return (
    <>
      <Header />
      {
        !submitted ?
          <FormBox handleSubmission={handleSubmission}/>
        : 
          <DisplayTable formSubmissions={formSubmissions} goBack={goBack}/>
      }
    </>
  );
}
