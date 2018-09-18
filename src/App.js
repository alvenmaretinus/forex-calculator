import React, { Component } from 'react';
import './App.css';
import BaseCurrency from './components/BaseCurrency';
import CurrencyAdder from './components/CurrencyAdder';
import CurrencyItems from './components/CurrencyItems';

class App extends Component {
    constructor() {
        super();
        this.state = {
            baseCurrencyValue: 1,
            currencies: [],
            rates: {}
        };

        this.handleAddCurrency = this.handleAddCurrency.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleItemRemove = this.handleItemRemove.bind(this);
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,EUR,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({rates: result.rates});
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        return (
            <div className="forex">
                <BaseCurrency value={this.state.baseCurrencyValue} onValueChange={this.handleValueChange} />
                <CurrencyItems currencies={this.state.currencies}
                               rates={this.state.rates}
                               baseCurrencyValue={this.state.baseCurrencyValue}
                               onItemRemove={this.handleItemRemove} />
                { this.state.currencies.length < 10 ? <CurrencyAdder activeCurrencies={this.state.currencies} onAddCurrency={this.handleAddCurrency} /> : null }
            </div>
        );
    }

    handleAddCurrency(array) {
        this.setState({currencies: array});
    }

    handleValueChange(value) {
        this.setState({baseCurrencyValue: value});
    }

    handleItemRemove(index) {
        let tempArray = this.state.currencies.slice();
        tempArray.splice(index, 1);
        this.setState({currencies: tempArray});
    }
}

export default App;
