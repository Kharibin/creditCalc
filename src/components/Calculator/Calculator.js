import React from "react";
import InputSlider from "../InputSlider/InputSlider";
import CalculationResult from "../CalculationResult/CalcuationResult";
import './style.css'

const defaultValues = {
    sum: '100000',
    time: '12',
    rate: '14'
};

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultValues
    }

    /*апдейтим стейт при изменении вводных данных*/
    calculatePayment(
        {
            sum = this.state.sum,
            time = this.state.time,
            rate = this.state.rate
        }
    ) {
        const payment = sum / time;
        this.setState({
            sum,
            time,
            rate,
            payment
        });
    }

    /*Расчет данных для талицы платежей*/
    calcData() {
        const paymentsData = [];
        const absoluteRate = this.state.rate / 100;
        const P = absoluteRate / 12;
        const divisor = Math.pow(+P + 1, this.state.time) - 1;
        const payment = this.state.sum * (P + (P / divisor));
        let balance = this.state.sum;
        let debtPart = 0;
        let creditPart = balance * P;
        for (let i = 0; i < this.state.time; i++) {
            let monthlyCalcs = {
                number: i + 1,
                payment: payment.toFixed(2)
            };
            debtPart = payment - creditPart;
            monthlyCalcs.debtPart = debtPart.toFixed(2);
            monthlyCalcs.creditPart = creditPart.toFixed(2);
            creditPart = (balance - debtPart) * (P);
            balance = balance - debtPart;
            monthlyCalcs.balance = balance.toFixed(2);
            paymentsData.push(
                <CalculationResult monthlyCalcs={monthlyCalcs} key={i + "paymentsData"}/>
            );
        }
        return (
            <div className="paymentsData">
                <table className="tableSection">
                    <thead>
                    <tr>
                        <th>Номер платежа</th>
                        <th>Месяц/Год</th>
                        <th>Платеж по основному долгу</th>
                        <th>Платеж по процентам</th>
                        <th>Остаток основного долга</th>
                        <th>Сумма платежа</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paymentsData}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <div className="mainGridContainer">
                <div className={"inputDiv"}>
                    <InputSlider name={"Размер кредита"} min={100000} max={5000000}
                                 func={(sumChangeEvent) => this.calculatePayment({sum: sumChangeEvent.target.value})}
                                 value={this.state.sum} step={1} valueTypeName="₪"/>

                    <InputSlider name={"Срок кредита"} min={12} max={60}
                                 func={(timeChangeEvent) => this.calculatePayment({time: timeChangeEvent.target.value})}
                                 value={this.state.time} step={1} valueTypeName="мес."/>

                    <InputSlider name={"Процентная ставка"} min={12.9} max={23.9}
                                 func={(rateChangeEvent) => this.calculatePayment({rate: rateChangeEvent.target.value})}
                                 value={this.state.rate} step={0.01} valueTypeName="%" disabled={true}/>
                </div>
                <div>
                    {this.calcData()}
                </div>
            </div>
        );
    }
}


export default Calc;