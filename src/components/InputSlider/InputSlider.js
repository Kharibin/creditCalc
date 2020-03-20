import React from "react";


const InputSlider = (props) => (
    <div>
        {props.name}

        <input type="range" min={props.min} max={props.max} value={props.value} step="1"
               onChange={props.func}/>

    </div>
);

export default InputSlider;