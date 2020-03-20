import React from "react";

const CalculationResult = (props) => (
    <li>
        Payment number: {props.monthlyCalcs.number}
        <br/>
        Payment amount: {props.monthlyCalcs.payment}
        <br/>
        Credit part: {props.monthlyCalcs.creditPart}
        <br/>
        Debt part: {props.monthlyCalcs.debtPart}
        <br/>
        balance: {props.monthlyCalcs.balance}
    </li>
);

export default CalculationResult;