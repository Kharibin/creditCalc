import React from "react";
import './style.css';

const InputSlider = (props) => (
    <div className={"range-slider"}>
        {props.name}

        <span> {props.value} {props.valueTypeName}</span>
        <br/>
        <input type="range" min={props.min} max={props.max} value={props.value} step={props.step} disabled={props.disabled}
               onChange={props.func}/>

    </div>
);

export default InputSlider;