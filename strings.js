let str = "hello world" 
console.log(str.charAt(str.length-1)) //in string we cannot use str.charAt(-1) because js doesnt support this 

//charCodeAt -- which prints the Ascii value of the character

let str1 = "javascript"
console.log(str1.charCodeAt(1))

//concat

let newStr = str.concat(" "+str1)
console.log(newStr)

//includes 
let str2 = "Single threaded index"
console.log( str2.includes("i",3))  //here "i" is a charcter and 3 is an index ..it will check form third index to the end whther the letter is "i" is present in those index or not
//index of
let newstr1 = "ishu"
console.log(newstr1.indexOf("e"))