//create a class for student
class Student {
    constructor(id , name){
        this.id = id;
        this.name = name; 
    }
    // create a method for offer price for student about 30%
    course_offer(fee){
        return fee - ((fee * 30) / 100);
    }

}
// create Course_Details child class
class Course_Details extends Student {
    constructor(course){
        this.course = course;
    }
}
let s1 = new Student(1 , "Jhon");
// console.log(s1.id , s1.name);

let n = s1.course_offer(500);
// console.log(n);

document.getElementById("sid").innerHTML = s1.id;
document.getElementById("sname").innerHTML = s1.name;
document.getElementById("fee").innerHTML = n;