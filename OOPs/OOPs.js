// object literal or base unit js

const user ={
    username : "pawan",
    logincount :8,
    signedIn :true,
    getuserDetails : function(){
        console.log("Got user details from database");
    }
}

console.log(user.username);
console.log(user.getuserDetails());