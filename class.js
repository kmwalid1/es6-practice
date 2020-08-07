class Student{
    constructor(sId , sName){
        this.id = sId;
        this.name= sName;
        this.school = "SM model govt. high school"
    }
}

const student1 = new Student(1,"km");
const student2 = new Student(2,"walid");
console.log(student1, student2);