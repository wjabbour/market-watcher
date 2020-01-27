import React, { Component, props } from 'react';
import {getWatches} from '../services/http-service';

class WatchTable extends Component {
    constructor() {
        super(props);
    }
    componentDidMount() {
        getWatches();
    }
    render() {
        return <p>My Table!</p>
    }
}

export default WatchTable;