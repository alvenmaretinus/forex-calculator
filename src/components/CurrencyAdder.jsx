import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector'
import getCurrencyCode from './../helpers/getCurrencyCode';

class CurrencyAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableCurrencies: [
                'CAD - Canadian Dollar',
                'EUR - Euro',
                'IDR - Indonesian Rupiah',
                'GBP - British Pound',
                'CHF - Swiss Franc',
                'SGD - Singapore Dollar',
                'INR - Indian Rupee',
                'MYR - Malaysian Ringgit',
                'JPY - Japanese Yen',
                'KRW - Korean Won'
            ],
            value: '',
            errorMessage: '',
            isButtonClicked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCurrency = this.addCurrency.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isButtonClicked ? (
                    <button className="forex__add" onClick={this.handleClick}>+ Add More Currencies</button>
                ) : (
                    <form className="forex__submit__form" onSubmit={this.handleSubmit}>
                        <CurrencySelector allCurrencies={this.state.availableCurrencies}
                                          activeCurrencies={this.props.activeCurrencies}
                                          onChange={this.handleChange} />
                        <button className="forex__submit" type="submit">Submit</button>
                        <div>{this.state.errorMessage}</div>
                    </form>
                )}
            </React.Fragment>
        );
    }

    handleClick() {
        this.setState({isButtonClicked: true});
    }

    handleChange(value) {
        console.log(value);
        this.setState({value: value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const {value} = this.state;
        const currencyCodeArray = getCurrencyCode(this.state.availableCurrencies);
        const index = currencyCodeArray.indexOf(value);

        this.addCurrency(index);
    }

    addCurrency(index) {
        let tempArray = this.state.availableCurrencies.slice();
        let updatedCurrencies = this.props.activeCurrencies;
        updatedCurrencies.push(tempArray[index]);

        this.props.onAddCurrency(updatedCurrencies);

        this.setState({
            value: '',
            errorMessage: '',
            isButtonClicked: false
        });
    }
}

export default CurrencyAdder;