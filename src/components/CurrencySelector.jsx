import React, { Component } from 'react';
import getCurrencyCode from './../helpers/getCurrencyCode'

class CurrencySelector extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.getAvailableCurrencies = this.getAvailableCurrencies.bind(this);
    }

    componentDidMount() {
        this.props.onChange(getCurrencyCode(this.getAvailableCurrencies()[0]));
    }

    render() {
        return (
            <select className="forex__selector" onChange={this.handleChange}>
                {this.getAvailableCurrencies().map((item) =>
                    <option value={getCurrencyCode(item)} key={getCurrencyCode(item)}>{item}</option>
                )}
            </select>
        );
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    getAvailableCurrencies() {
        return this.props.allCurrencies.filter(x => !this.props.activeCurrencies.includes(x));
    }
}

export default CurrencySelector;