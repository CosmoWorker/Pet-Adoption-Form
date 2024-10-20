import React from "react";

export default function InpH(props){
    
    if (!props.placeholder){
        return (
            <>
                <div>
                    <h3>{props.head}</h3>
                    <select value={props.value} onChange={props.setValue} name={props.name} >
                        <option value="">Select Pet Type</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bird">Bird</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </>
        )
    }else{  
        return(
            <>
                <div>
                    <h3>{props.head}</h3>
                    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.setValue} name={props.name}/>
                    <p>{props.error}</p>
                </div>
            </>
        )
    }

    
}