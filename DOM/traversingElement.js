//Parent

// function traversingParent(){
    

// let getParent = document.querySelector( ".child1")

// console.log( getParent.parentElement )
// console.log( getParent.parentNode);
// let getParent1 = document.querySelector("html")

// console.log( getParent1.parentElement);
// console.log( getParent1.parentNode)
// }


// child 

function selectChild(){
    let getElementByClass = document.querySelector(".parent")
    console.log( getElementByClass.childElementCount );

    console.log( getElementByClass.childNodes );
}
// selectChild()





///siblings
function selectSibling(){
    let child1 = document.querySelector(".child1")
    console.log( child1.nextsibling );
    console.log( child1.nextElementSibling );
    console.log(child1.previousElementSibling);
  

}