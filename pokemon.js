// Ajax - asynchronous Javascript and XML
// Protocol for making async requests to a server over http
// Misojmer now becuse almost all modern APIs use Uson not XML

// 1. Create a Promise
// 2. Within the promise, initiate Ajax request
// 3. If request succeccds, resolve the promise with the result
// 4. Otherwise, reject the promise with an error

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase()
    +this.slice(1)
}
    

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// this then handle the promise return by fetch
    .then(response => response.json()
        // this then hadles the promise return by text
            .then(data => {
                // update the text of pokemon name with the name from the data
                // 1. get the dom node for pokemon name
                const pokemonName = document.querySelector('#pokemon-name') 
                // 2. Set innerText on pokemonName to data.name
                data.name[0] = data.name[0].toUpperCase()
                
            })
)
console.log('Awaiting fetch...')