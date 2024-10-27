// const tinderUser =new Object() singleton object

const tinderUser ={}  // non singleton object 

tinderUser.id ='123abs'
tinderUser.name ="sammy"
tinderUser.isLoggedIn =false
tinderUser.details ={
    age:22,
    single:false,
    sex :"male,"
};
console.log(tinderUser.details.age)

// combinig Objects

const obj1 ={1:"a",2 : "b"};
const obj2 ={3:"c",4:"D"};

// const obj3 ={...obj1,...obj2}
const obj3 =Object.assign({},obj2,obj1)
obj3["1"] ="dfasfasf"
console.log(obj3)
console.log(obj1)
console.log(obj2)


console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))