import React from "react";
import InputSlider from "../InputSlider/InputSlider";
import CalculationResult from "../CalculationResult/CalcuationResult";

const defaultValues = {
    sum: '100000',
    time: '12',
    rate: '0.14'
};

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultValues
    }

    changeSum(event) {
        this.calculatePayment(event.target.value, this.state.time)
    }

    changeTime(event) {
        this.calculatePayment(this.state.sum, event.target.value)
    }

    calculatePayment(sum, time) {
        const payment = sum / time;
        this.setState({
            sum: sum,
            time: time,
            payment: payment
        })
    }

    makeData() {
        const paymentsData = [];
        const P = this.state.rate / 12;
        const divisor = Math.pow(+P + 1, 12) -1;
        const payment = this.state.sum * (P + (P / divisor));
        let balance = this.state.sum;
        let debtPart = 0;
        let creditPart = balance * P;
        for (let i = 0; i < this.state.time; i++) {
            let monthlyCalcs = {
                number: i+1,
                payment: payment.toFixed(2)
            };
            debtPart = payment - creditPart;
            monthlyCalcs.debtPart = debtPart.toFixed(2);
            monthlyCalcs.creditPart = creditPart.toFixed(2);
            creditPart = (balance - debtPart) * (P);
            balance = balance - debtPart;
            monthlyCalcs.balance = balance.toFixed(2);
            paymentsData.push(
                <CalculationResult monthlyCalcs = {monthlyCalcs} key = {i + "paymentsData"}/>
            );
        }
        return paymentsData;
    }

    render() {
        return (<div>
            <InputSlider name={"Cумма"} min={100000} max={5000000} func={(x) => this.changeSum(x)}
                         value={this.state.sum}/>
            <InputSlider name={"Срок"} min={12} max={60} func={(x) => this.changeTime(x)} value={this.state.time}/>
            <hr/>
            {this.makeData()}
        </div>);
    }
}


export default Calc;