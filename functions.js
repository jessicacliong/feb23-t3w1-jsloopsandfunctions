// //traditional
// function greeter(){
//   console.log("standard message")
// }

// //function funcrionName(parameters) {block of stuff to do}

// /**
//  * 
//  * @param {string} customMessage Required! Some message to display.
//  */
// function greeterWithMessage(customMessage){
//   console.log("customMessage is:" + customMessage);
// }

// /**
//  * 
//  * @param {string} customMessage Optional. Some message to display in the console.log output.
//  */
// function greeterwithDefault(customMessage = "default message"){
//   console.log("customMessage is:" + customMessage);
// }

// greeterwithDefault();

// greeterwithDefault("some custom message");



// ES6 style
//Preferred style of notation in newer projects
// /**
//  * 
//  * @param {string} customMessage Optional. Some message.
//  */
// let greeterwithDefaultES6 = (customMessage = "default value again") =>{
//   console.log("customMessage is:" + customMessage);
// }

// //Function not executed, just copied around:
// // let storedCustomMessage = greeterWithDefaultES6;

// //Function executed returned value copied around:
// let storedCustomMessage = greeterWithDefaultES6();

// console.log("The returned value from the ES6 function is: " + storedCustomMessage);

// let someComplexVariable = (someValue * someOtherValue - someResultFromSomeFunction())

//IIFEs

// let someNewFunction = () => {

// }

// let someUserJwt = "blah blah pretend it's a JWT"
// ((someUserJwt) => 
// {
//  // async checkJwtWithAPI(someUserJwt)
//  console.log(someUserJwt);
// }
// )();

// let checkUserJwt = (someUserJwt) => {
//   console.log(someUserJwt);
//  }
//  checkUserJwt();
  

// (() => {
//   console.log("custome messsage from IIFE:" + customMessage);
// })();

//callbacks

let someFuncionWithCallback = (someMessage, someCallback) => {

  someCallback(someMessage);

}

someFunctionWithCallback("hello world", console.log);

let someForm = (inputBox, callback) => {
  callback(inputBox);
}

someForm(emailBox, validateEmail);