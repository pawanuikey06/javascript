const course ={
    courseName :"JavaScript in Hindi",
    price:'1234',
    courseInstructor:"MR. Hitesh Choudhary"

}

// Values extracting from objects
const {courseInstructor} =course

console.log(courseInstructor)

const {courseInstructor :instructor} =course
console.log(instructor);
