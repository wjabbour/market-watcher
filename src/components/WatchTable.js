import React, { Component, props } from 'react';
import Watch from './Watch';
import { getWatches } from '../services/http-service';

class WatchTable extends Component {
    constructor() {
        super(props);
        watchCount = 0
        this.state = {
            watches: []
        }
    }
    componentDidMount() {
        getWatches().then(result => {
            const watches = result.watches.map((watch) =>
                <Watch  ticker={watch.ticker}
                        initPrice={watch.initPrice}
                        currentPrice={watch.currentPrice}
                        dateCreated={watch.dateCreated}
                        percentChange={watch.percentChange}
                        key={this.watchCount.toString()}
                />
            );
            this.setState({
                watches: watches
            });
        });  
    }
    render() {
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
                        { this.state.watches }
                    </tbody>
            </table>
        );  
    }
}

export default WatchTable;