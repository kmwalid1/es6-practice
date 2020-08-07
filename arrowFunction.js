const single = num => num*2;
result = single(50);
console.log(result);

const double = (num,num2) => num + num2;
result = double(50,60);
console.log(result);

const empty = () => 5;
result = empty();
console.log(result);

const multiple = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum + diff ;
    return result;
}
const result = multiple(8,5);
console.log(result);