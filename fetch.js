function fetchProfile( successcallBack ,errorcallBack ){
    let dataRecieved = false;
    if(dataRecieved){
        successcallBack("Data Received ")
    }
    else{
        errorcallBack("Data Not Recieved")
    }
}
fetchProfile( 
    (message)=>{
        console.log( message ); 
        fetchProfile( 
            (nextMessage) => { //call back hell because we are using nested call back function 
                console.log("Next Message: "+ nextMessage);

            },  
            (nextError) =>{ 
                 console.log("Next Error:" +nextError);
            }
        )
    },
    (error )=>{ 
        console.log( error )
    }
)