fetch("https://fakestoreapi.com/users/abcd")
.then( (response)=>{
    if(!response.ok){
        throw new Error("Data Not Found") //if the response is false this then block directly throws error to catch block

    }
    console.log(response.ok)
    return (response.json()) //used to convert the backend data into nora]mal javascript form 

})
.then ( ( data ) =>{ console.log( data ); //coverting the promise into the object 

})
.catch( (error)=>{
    console.log(error.message)
})


async function fetchData(){
    try{
        

    }
    catch(error){

    }
}