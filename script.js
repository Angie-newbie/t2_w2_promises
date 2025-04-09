console.log('test')
// resolve and reject are callback functions
// Passes in by the Promise constructor
const firstPromise = new Promise((resolve, reject)=> {
    // Call resolve() anywhere to resolve the promise
    // Or, call reject() anywhere to reject the promise
    // Either one acts like a return - it will exit the function immediately
    reject('doesnt work')
})
console.log('Promise initiated')

//Main
// The 'then callbackb happeen if the promise resolves
firstPromise.then(result => {
    console.log('Promise result: ${result}')
}).catch(err => {
    console.log('error')
})

console.log('End of Line')