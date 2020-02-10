import axios from 'axios';
export function getWatches() {
    return fetch("http://localhost:3339/watches")
        .then(res => res.json())
}
export function deleteWatch(watchId) {
    return fetch("http://localhost:3339/watch?watchId=" + watchId, {
        method: 'DELETE'
    })
}
export function createWatch(watch) {
    axios.post( "http://localhost:3339/watch/add", watch)
        .then(res => console.log(res.data));
}