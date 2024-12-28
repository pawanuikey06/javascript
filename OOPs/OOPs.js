// object literal or base unit js

const user ={
    username : "pawan",
    logincount :8,
    signedIn :true,
    getuserDetails : function(){
        console.log("Got user details from database");
        console.log(`UserName : ${this.username} & logged in Count is :${this.logincount}`)
        // console.log(this)
    }
}

console.log(user.username);
console.log(user.getuserDetails());
console.log(this)


// Constructor Function




function User(username ,logincount ,signedIn){
    this.username =username
    this.logincount=logincount
    this.signedIn=signedIn
}

const user1 =new User('hitesh',12,true);
const user2 = new User('ChaiORCode',12,false)
console.log(user1.constructor)
console.log(user2)