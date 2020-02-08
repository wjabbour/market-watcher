import React, { Component, props } from 'react';

class Watch extends Component {
    constructor() {
        super(props);
    }
    render() {
        return (
            <tr>
                <th scope="row">{ this.props.ticker }</th>
                <td>{this.props.initPrice}</td>
                <td>{this.props.currentPrice}</td>
                <td>{this.props.dateCreated}</td>
                <td>{this.props.percentChange}</td>
            </tr>
        );  
    }
}

export default Watch;