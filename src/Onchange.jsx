import React,{useState} from "react";

function Onchange(){
    const [name,setName] = useState("guest")

    function handleNameChange(e){
        setName(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
        </div>
    )   
}
export default Onchange