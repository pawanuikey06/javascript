
// Object Literals

const mySymbol = Symbol("key1");
// We Can't Use symbol directly as a key
const JsUser ={
    name :"Pawan",
    college :"National Institue Of Technology Raipur",
    age :22,

    // we use sqr bracket to reffer symbol
    [mySymbol] : "myKey1",
    email :"pawanuikey690@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ['Monaday' ,'Saturday']

}
// we cont change or modify the object
// Object.freeze(JsUser)
JsUser["email"] ="@.com"
// Ways of Acces Object keys and Values
console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser["name"])
console.log(JsUser["age"])
// we dont use quotes to acces symbols

console.log(JsUser[mySymbol])


// Function
// adding new values in object
JsUser.greeting =function(){
    console.log("hello js User")
}
JsUser.greetingTwo =function(){
    console.log(`"hello js User", ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser)