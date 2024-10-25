let str ="ApnaCollege";

for(i of str){
    console.log(i);
}

const student={
    fullName :"Pawan Kumar",
    age :20,
    Cgpa :8.2,
    isPass :true
};

for(let key in student){
    console.log(key ," :",student[key])
}

for(let i=0 ;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

let gameNum =25;

let UseNum =prompt("Enter The Number");


while(UseNum!=gameNum){
     UseNum =prompt("You Enterered The wrong Number  guess Again");
}
console.log("Congratulations you entered the right Number")

let str1 =`hello ji ${UseNum} ghar aao mehman`;
console.log(str1);

const st =new String("pawan");
console.log(st)


