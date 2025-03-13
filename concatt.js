// before ES 6 we will use concat to take separate copy of an array . ( alternate for rest and spread)
let arr = [1,2,3,4]
let arr1 = [5,6,7,8]

//concat method

let newarray = arr.concat(arr1)
console.log(newarray)
console.log(newarray.concat(9,99,999))

let a = [10,20,30]
let b = a.concat(50,60);
console.log(b)
let c =[].concat(a)
console.log(c)