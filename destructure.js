const person = {name: "jack", age: 17, job: "facebook" ,
info:{
    address:"kocu khat"
}
};

const {name,job} = person;
const age = person.age;
const {address} = person.info; 

console.log(name,job,age,address);


const friends = ["jack" , "tom" , "harry" , "justin"];
const [first,second,...third] = friends;
// console.log(first,second,third);