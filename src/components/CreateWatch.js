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
        this.onSubmit = this.onSubmit.bind(this);
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

        this.setState({
            ticker: "",
            price: 0
        });
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Create New Watch!</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label> Ticker: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.ticker}
                            onChange={this.onChangeTicker}
                            />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
        );
    }
}

export default CreateWatch;