import React, { Component } from 'react';


class CreateWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ticker: "",
            price: 0
        }

        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTicker = this.onChangeTicker.bind(this);
    }

    onChangeTicker(e) {
        this.setState({
            ticker: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form is submitted!");

        this.setState({
            ticker: "",
            price: 0
        });
    }
    render() {
        return <p>My CreateWatch!</p>
    }
}

export default CreateWatch;