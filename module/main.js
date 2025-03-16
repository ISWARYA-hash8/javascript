// function application(){
//     console.log( loginData );
//     console.log( signupData);


// }
// application() //we will get ERROR "Login Data Not Found" 
// TO overcome this we will use import and export modules in js
//------------------------------
// import { loginData } from "./loginPage.mjs";
// import { signupData } from "./SignUppage.mjs";  // Make sure the filename is correct!

// function application() {
//     console.log(loginData);
//     console.log(signupData);
// }

// application();
 //output : Cannot use import statement outside a module
// the environment should know that we are using modules while using the keyword import and export keyword to change this we need to rename the extension from .js --> .mjs file format
// import { loginData as userdata } from "./loginPage.mjs"; //the "as" keyword is called as alias
// import signdata from "./SignUppage.mjs";  // Make sure the filename is correct!

// function application() {
//     console.log(userdata);
//     console.log(signdata);
// }

// application();

import { employeeId ,loginInfo } from "./loginPage.mjs";
import { signUpInfo } from "./SignUppage.mjs";
function application(){
    console.log( employeeId);
    loginInfo()
    signUpInfo();
}
application() 