
export function getWatches() {

    return fetch("http://localhost:3339/watch")
    .then(res => res.json())
        .then(result => result);
 
}

export function createWatch() {
    console.log("Watch created!");
}


