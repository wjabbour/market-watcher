import React, { Component, props } from 'react';
import Watch from './Watch';
import { getWatches } from '../services/http-service';

class WatchTable extends Component {
    constructor() {
        super(props);
        this.watchCount = 0
        this.state = {
            watches: []
        }
    }
    componentDidMount() {
        getWatches().then(watchJSON => {
            const watches = this.createWatches(watchJSON);
            this.setState({
                watches: watches
            });
        });  
    }
    createWatches(watchJSON) {
        
        const watches = watchJSON.watches.map((watch) =>
            <Watch  ticker={watch.ticker}
                    initPrice={watch.initPrice}
                    currentPrice={watch.currentPrice}
                    dateCreated={watch.dateCreated}
                    percentChange={watch.percentChange}
                    // key={watchCount.toString()}
            />
        );
        this.watchCount++;
        return watches;
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