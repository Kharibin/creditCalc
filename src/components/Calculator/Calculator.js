import React from "react";
import InputSlider from "../InputSlider/InputSlider";
import CalculationResult from "../CalculationResult/CalcuationResult";

const defaultValues = {
    sum: '0',
    time: '0',
    payment: '0',
    rate: '0'
};

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultValues
    }

    changeSum(event) {
        console.log(event.target.value);
        this.calculatePayment(event.target.value, this.state.time)
    }

    changeTime(event) {
        console.log(event.target.value);
        this.calculatePayment(this.state.sum, event.target.value)
    }

    calculatePayment(sum, time) {
        const payment = sum/time;
        this.setState({
            sum: sum,
            time: time,
            payment: payment})
    }

    render() {
        return (<div>
            <InputSlider name={"Cумма"} min={100000} max={5000000} func={(x) => this.changeSum(x)} value={this.state.sum}/>
            <InputSlider name={"Срок"} min={12} max={60} func={(x) => this.changeTime(x)} value={this.state.time}/>
            <hr>
            </hr>
            <CalculationResult value={this.state.payment}/>
        </div>);
    }
}


export default Calc;