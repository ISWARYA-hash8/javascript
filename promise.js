//handles the asynchronous opeation efficiently
// resolve reject pending
let newPromise = new Promise((resolve,reject)=>{
    let DataReceived = false;
    if(DataReceived){
        resolve("Data Received")
    }
    else{
        reject("Data Not Received")
    }
})
newPromise.then( console.log ).catch( console.log )  //promise chaining to avoid hell condition