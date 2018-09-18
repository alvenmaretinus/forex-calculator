import React, { Component } from 'react';

class BaseCurrency extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="forex__input">
                <div className="forex__input__heading">USD - United States Dollar</div>
                <div className="forex__input__container">
                    <div className="forex__input__name">USD</div>
                    <input className="forex__input__field"
                           type="number"
                           value={this.props.value}
                           onChange={this.handleChange}
                           min="1"
                           autoFocus />
                </div>
            </div>
        );
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.onValueChange(value);
    }
}

export default BaseCurrency;