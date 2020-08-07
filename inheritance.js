class Parent {
    constructor(){
        this.fatherName = "Bulldog"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby =new Child("Tom");
const baby2=new Child("Jerry");
// console.log(baby.fullName());
console.log(baby2);