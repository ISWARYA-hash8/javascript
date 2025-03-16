function manipulateElements(){
    let newListElement = document.createElement("li")

    console.log( newListElement );


    ///Inner text

    // newListElement.innerText = "item-4";
    // newListElement.innerHTML = "<a>Link</a>item-5"
    // console.log( newListElement );

    let input = document.querySelector("input");

   // console.log( input.value )

    newListElement.innerText = input.value

    console.log(newListElement)
    
}