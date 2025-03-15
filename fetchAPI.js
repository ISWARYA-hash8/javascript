// fetch("https://fakestoreapi.com/users/")
// .then( (response)=>{
//     if(!response.ok){
//         throw new Error("Data Not Found") //if the response is false this then block directly throws error to catch block

//     }
//     console.log(response.ok)
//     return (response.json()) //used to convert the backend data into nora]mal javascript form 

// })
// .then ( ( data ) =>{ console.log( data ); //coverting the promise into the object 

// })
// .catch( (error)=>{
//     console.log(error.message)
// })


async function fetchData(){
    try{
       let response =await fetch("https://fakestoreapi.com/users")
       if(!response){
        throw new Error("Data not found")
       }
       let data = await response.json()
       console.log( data )

    }
    catch(error){
console.log("error.message")
    }
}
fetchData()