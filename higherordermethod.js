let fruits = ["Apple","watermelon","muskmelon"]
// fruits.forEach(printfruit)
// function printfruit(currentElement ,index,totalArray){
//     console.log(currentElement,index,totalArray)
// }
// //----map()

// fruits.map(function(curr,ind,totarr){
//     console.log(curr,ind,totarr)
// })

let newarr = fruits.forEach((currele)=>{
    console.log(currele.toUpperCase())
    return currele
})
console.log(newarr) //undefined bcos of nthing returned 

let newarr1 = fruits.map((currele,index)=>{
    return { id:index+1,fruit:currele}
})
console.log(newarr1) //returns as an array and creates a new array even if is no return statement


//--chaining method 

// let newArr = fruits.map(cEle => cEle.toUpperCase()).sort().fill("123")
// console.log(newArr)

// let newArr = fruits.forEach (cEle => cEle.toUpperCase()).sort().fill("123")
// console.log(newArr)

//-----

let newarrr =fruits.map( (cEle) => { return cEle =="Apple"})
console.log(newarrr)