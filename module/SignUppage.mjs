//Default Export
export let signupData = {
    uName : "Sabari",
    uEmail : "sabari123@gmail.com",
    age : 16
}

//if we use default 
export default signupData;

//if you are exporting it as default there is no need for curly braces

export function signUpInfo(){
    console.log( signupData );
}