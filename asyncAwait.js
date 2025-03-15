let newPromise = new Promise( (fullfilled,failure) =>{
    let dataReceived = true;
    if(dataReceived){
        fullfilled("Data Received");
    }
    else{
        failure("Data NOt found")
    }
} )

let message = await newPromise
console.log( message )
console.log( "last")