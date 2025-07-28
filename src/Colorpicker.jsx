import React,{useState} from "react";

function Colorpicker(){

    const [color,setColor]=useState("#ffffff")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div>
            <h1>Color Picker</h1>
            <div style={{backgroundColor:color}}>
                <p>Selected Color is:{color}</p>
            </div>
            <label htmlFor="">
                Select a color:
            </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default Colorpicker