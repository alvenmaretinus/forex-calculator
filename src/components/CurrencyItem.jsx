import React, { Component } from 'react';
import getCurrencyCode from './../helpers/getCurrencyCode';
import setCurrencyFormat from './../helpers/setCurrencyFormat';

class CurrencyItems extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="forex__item">
                <div className="forex__item__content">
                    <div className="forex__item__heading">
                        <div>{getCurrencyCode(this.props.item)}</div>
                        <div>{setCurrencyFormat(this.props.baseCurrencyValue * this.props.rates[getCurrencyCode(this.props.item)])}</div>
                    </div>
                    <div className="forex__full__name">{this.props.item}</div>
                    <div className="forex__rate">1 USD = {getCurrencyCode(this.props.item)} {setCurrencyFormat(this.props.rates[getCurrencyCode(this.props.item)])}</div>
                </div>
                <button className="forex__item__remove" onClick={this.handleClick}>-</button>
            </div>
        );
    }

    handleClick() {
        this.props.onItemRemove(this.props.index);
    }
}

export default CurrencyItems;