function fetchProfile( successcallBack ,errorcallBack ){
    let dataRecieved = true;
    if(dataRecieved){
        successcallBack()
    }
    else{
        errorcallBack()
    }
}
fetchProfile( 
    ()=>{},
    ()=>{}
)