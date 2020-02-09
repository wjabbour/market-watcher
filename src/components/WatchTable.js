import React, { Component, props } from 'react';
import Watch from './Watch';
import { getWatches } from '../services/http-service';

class WatchTable extends Component {
    constructor() {
        super(props);

        this.state = {
            watches: []
        }
    }
    componentDidMount() {
        getWatches().then(result => {
            this.setState({
                watches: result
            });
        });  
    }
    render() {
        const watches = <div></div>;
        return (
            <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Init. Price</th>
                            <th>Current Price</th>
                            <th>Date Created</th>
                            <th>% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        { watches }
                    </tbody>
            </table>
        );  
    }
}

export default WatchTable;