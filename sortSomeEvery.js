let arr =[10,20,200,30]
let nwarr=arr.sort(  (a,b)=>{return a-b})
console.log(nwarr)
//compares the value until it gets swapped in ascending order

//descending order

let newArr = [10,20,2,0,4,11,111,"true","200","100A"]

let descendingsort = newArr.sort( (a,b)=> {return b-a})
console.log(descendingsort)

//b-a => "100A" - true => NaN - 1 => NaN 

//takes the true as 1 and "200" as explicitly number 

//Some & Every 
//in logical or any 1 condition is true it will be true --- some is same as OR
//in logical AND both the condition must be true --- Every is same as AND
let arr1 = [1,2,3,4,5]
let value = arr1.some((ele,index,arr)=>{
    return ele%2==0
}) //here the call back function called as predicate
console.log(value)  // result is true ... it returns true if any ione of the value becomes true

let value1 = arr1.every((ele,ind,arr)=>{
    return ele%2==0
})
console.log(value1) //returns if any one value is false it is false 