
// console.log ( document )
// console.log ( {document} )
// console.log ( document.head )
// console.log ( document.body )
let heading = document.getElementsByTagName("h1") //results as array because tag names are single element
console.log(heading)


let para1 = document.getElementsByClassName("para1")
console.log(para1)
let para2 = document.getElementsByClassName("para2")
console.log(para2)
let para3 = document.getElementsByClassName("para3")

console.log(para3)
let id = document.getElementById("uniq para")
console.log(id)


let name = document.getElementsByName("name")
console.log(name)

//query selector all

let selectOne = document.querySelectorAll("h1")
console.log(selectOne)

let select = document.querySelectorAll(".para1") //para is a class so we are using the dot operator
console.log(select)

let s = document.querySelectorAll("#uniq para") //uniq para is a id so we are using hash "#"

console.log(s)

let multiElements = document.querySelectorAll("h1")
console.log( multiElements )


//NodeList(2) [h1, h1]  --> output 
// element node , attribute node ,text node ---> each and every character is consider as node in a web page it may be ltters or image or anything


