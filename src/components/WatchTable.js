import React, { Component, props } from 'react';
import Watch from './Watch';
import { getWatches, deleteWatch } from '../services/http-service';

class WatchTable extends Component {
    constructor() {
        super(props);
        this.watchCount = 0
        this.state = {
            watches: []
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    componentDidMount() {
        getWatches().then(watchJSON => {
            console.log(watchJSON);
            const watches = this.createWatches(watchJSON);
            this.setState({
                watches: watches
            });
        });
    }
    handleDeleteClick(e, watchId) {
        e.preventDefault();
        deleteWatch(watchId);
    }
    createWatches(watchJSON) {
        let watchCount = this.watchCount;
        let watches = [];
        watchJSON.forEach(watch => {
            watches.push(<Watch ticker={watch.ticker}
                                initPrice={watch.initPrice}
                                currentPrice={watch.currentPrice}
                                dateCreated={watch.dateCreated}
                                percentChange={watch.percentChange}
                                handleDeleteClick={this.handleDeleteClick}
                                watchId={watch._id}
                                key={watch._id}
                         />)
                watchCount++;
        });
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
                            <th></th>
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