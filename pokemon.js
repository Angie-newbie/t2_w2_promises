// Ajax - asynchronous Javascript and XML
// Protocol for making async requests to a server over http
// Misojmer now becuse almost all modern APIs use Uson not XML

// 1. Create a Promise
// 2. Within the promise, initiate Ajax request
// 3. If request succeccds, resolve the promise with the result
// 4. Otherwise, reject the promise with an error

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// this then handle the promise return by fetch
    .then(response => response.json()
        // this then hadles the promise return by text
            .then(data => console.log(data.name))
)
console.log('Awaiting fetch...')