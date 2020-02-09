import React, { Component, props } from 'react';

class Watch extends Component {
    constructor() {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleDeleteClick(e) {
        e.preventDefault();
        this.props.handleDeleteClick(e, this.props.key);
    }
    render() {
        // TODO: some of these props will need to be calculated in the constructor or lifecycle method
        return (
            <tr>
                <th scope="row">{ this.props.ticker }</th>
                <td>{this.props.initPrice}</td>
                <td>{this.props.currentPrice}</td>
                <td>{this.props.dateCreated}</td>
                <td>{this.props.percentChange}</td>
                <td><button onClick={this.props.handleDeleteClick}>Delete</button></td>
            </tr>
        );  
    }
}

export default Watch;