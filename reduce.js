let arr = [10,20,30,40,50]
let totval =0
for(let i=0;i<arr.length;i++){  //using for loop
    totval=totval+arr[i]
}
console.log(totval)

//using reduce method
let arr1=[10,2,3,4]
let totalval1= arr1.reduce( (acc,element,index,array ) => { return acc+element} ,0)
console.log(totalval1)
//here we use 4 values , and also we are using an accumulator which can store the sum value at each iteration
//----------------

let employess = [
    {name: "xyz" , salary :10000},
    {name: "abc" , salary : 3000},
    {name: "ok" ,salary : 200}
]
let calcsalary = employess.reduce( (acc,element) => {return acc+element.salary},0)
console.log(calcsalary)

