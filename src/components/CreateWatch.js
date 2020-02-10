import React, { Component } from 'react';
import { createWatch } from '../services/http-service';

class CreateWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ticker: "",
            initialPrice: ""
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
            initialPrice: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        createWatch({"ticker": this.state.ticker, "initialPrice": parseInt(this.state.initialPrice)});
        this.setState({
            ticker: "",
            initialPrice: ""
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
                            value={this.state.initialPrice}
                            onChange={this.onChangePrice}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" disabled={this.state.initialPrice === "" || this.state.ticker === ""}/>
                </div>
            </form>
        </div>
        );
    }
}

export default CreateWatch;