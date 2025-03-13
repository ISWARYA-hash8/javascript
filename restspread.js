let hobbies = ["writing","reading","basketball"];
let hobbies2 = ["running","walikngg"];
//spread operator 
let newarr = [...hobbies,...hobbies2];
console.log(newarr , hobbies);
let newwwon= hobbies; //we can us it like this but if we change the value inside it it will change the original value too because both the memory address are same
console.log(newwwon);
//using spread and rest operator is very useful for this
//related to memory management
hobbies[0]="baseball"
console.log(hobbies)
//------------------------------------
let newarr1 = [...newarr,"vediocreator","content writer"]
console.log(newarr1)

//-----for object

let empDetail ={
    empId : "124",
    empName:"ishu",
    empSalary :"react dev"
}
let team = {...empDetail,empId:"456",empSalary:100000,team2name:"full stack developers"
,teamName:"we bare bears"
} //we can also change the property of certain attributes
console.log(empDetail,team)

//realtime example filling the form like filling extra deatils alone by having the existing value 

//reat parameter or rest operator 
 
