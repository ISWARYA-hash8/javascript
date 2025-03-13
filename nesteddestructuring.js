let nestArr = [ 10,20,30 , [1,2,3,4,[9,99 ]  ]   ]
let [a,b,c, [ a1,b1,c1,d1,[a11,a12]]] = nestArr
console.log(a , c1 , a12)

//-----object destructurin  g
let mydetail ={
    id : "ec184",
    name :"iswarya",
    dept : "ece",
    salary : 100000,
    place : "tirupur"
}

console.log(mydetail.id,mydetail.name);
let {id,name2}=mydetail //destructuring
console.log(id,name2); //object la iladha property ah access panna undefined nu varum , doesnt throw error

//advantages
//you can destructure at any order (because of key value pair), order is not important like array 

//nested object destructuring

let nestObj = {
    id1:1,
    name1:"ishu",
    bankDetails : {
        accname : "sunjae",
        accNo : "1234353" ,
        branch : "xyz"
    }
}
let {id1 , name1 , bankDetails:{ accNo , accname,branch } } = nestObj
console.log(id1, name1, branch); 
//without destructuring we use nestObj.bankDetails.accNo 
//applications two files there , we are sending datas from one module to another  here we use destructuring