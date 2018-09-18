import React, { Component } from 'react';
import CurrencyItem from './CurrencyItem'
import getCurrencyCode from "../helpers/getCurrencyCode";

class CurrencyItems extends Component {
    constructor(props) {
        super(props);

        this.handleItemRemove = this.handleItemRemove.bind(this);
    }

    render() {
        return (
            <div className="forex__items">
                {this.props.currencies.map((item, index) => {
                    return <CurrencyItem item={item}
                                         index={index}
                                         rates={this.props.rates}
                                         baseCurrencyValue={this.props.baseCurrencyValue}
                                         key={getCurrencyCode(item)}
                                         onItemRemove={this.handleItemRemove} />;
                })}
            </div>
        );
    }

    handleItemRemove(index) {
        this.props.onItemRemove(index);
    }
}

export default CurrencyItems;