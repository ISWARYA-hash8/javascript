// //--callbacks -- a function is passed as an arguement to another function
// // function greeting(){
//     console.log("Vanakkam!")
// }

// setTimeout(greeting,2000) ///will execute the code after 2 seconds here the seconds can be indicated in microseconds so 2s-->2000ms
// // another way of mentioning the callback function

// setTimeout( (greeting)=>
// {
//     console.log("Hello")
// },3000)

// //nested TImeout

setTimeout(() => {
    console.log(1); // Runs after 2 seconds
    setTimeout(() => {
        console.log(2); // Runs after 2 + 3 = 5 seconds
        setTimeout(() => {
            console.log(3); // Runs after 5 + 2 = 7 seconds
        }, 2000);
    }, 3000);
}, 2000); //the datas are nested hence it is hard to debug ----> callback Hell

// to overcome this we use promise

const myPromise = new Promise((resolve , reject) =>{
    const random = Math.floor(Math.random() * 2);
    console.log(random)
    if(randomNum === 0){
        resolve();
    }
    else{
        reject()
    }
})
myPromise.then(()=> console.log('success'))
.catch(()=>{
    console.log('failure')
})

//---fs , axios ,fetch library have more promises
//promise demerit ---> endpoint concept 
//if there is no valid endpoint then the we will get an error to overcome this we will use ASync /Await
const getUser = async() =>{ //asyc keyword converts the function into asynchronous nature
       
}