import React from "react";
import './style.css'

const CalculationResult = (props) => (

    <tr>
        <td>{props.monthlyCalcs.number}</td>
        <td>{props.monthlyCalcs.number % 12? props.monthlyCalcs.number % 12 : 12} / {Math.ceil(props.monthlyCalcs.number/12)}</td>
        <td>{props.monthlyCalcs.debtPart}</td>
        <td>{props.monthlyCalcs.creditPart}</td>
        <td>{props.monthlyCalcs.balance}</td>
        <td>{props.monthlyCalcs.payment}</td>
    </tr>
);

export default CalculationResult;