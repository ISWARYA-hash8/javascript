let employees = [
    {empname : "ishu",salary:"100000"},
    {empname : "anandhi",salary:"200000"},
    {empname :"aruna",salary:"500000"},
]

// have to filter the person based on the condition
let filterData = employees.filter( val => val.salary>10000)
console.log(filterData)

let filterDataa =employees.filter(val => val.salary>10000).fill('123')
console.log(filterDataa)