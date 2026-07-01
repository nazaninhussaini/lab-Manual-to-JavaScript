const numbers =[1,2,3,4,5];
numbers.push(6,7,8,9,10);
numbers.pop();
numbers.unshift(0);
numbers.shift();

const num=[12,34,54,76,88,99];
const result = num.slice(1,2);

const name = ["Nazanin","Masoda","Raihan","Yasamin"];
name.splice(1,0,"Mahdia");
const names = ["Mozghan","Shekiba","Rahima"];
const AllNames = name.concat(names);

const text = ["Hi", "my", "name", "is", "Nazanin"];
const newText = text.join(" ");

const number = [1,10,12,14];
const result1 = number.forEach(function (number){
   console.log(number**2)
});

let multiplication = [2,4,6,3,5];
const natija = multiplication.map(i => i+2);

let adadd = [10,34,56,3,54];
const revers = adadd.filter(adadd => adadd<10);

let findFunction = [6,5,4,6,4];
const findNumbers = findFunction.find(findFunction => findFunction>3);

const price =[10,345,643,532,560,678,134];
function getItem(item){
   return item<200
}
const isAvailable = price.some(getItem);
if(isAvailable){
   console.log("there is something you can buy");
}
else{
   console.log("unfortunately");
}

const list = [2,5,4,7,8];
const listResult = list.reduce(function(curent,item){
   return curent+item
},0);

function getNumberItem(num){
   return num>9
}
const listResult1 = list.some(getNumberItem);

function getResult(item){
   return item>2;
}
const listResult2 = list.every(getResult);

const meName =["Nazanin","Nazi","Omid","Ali"];
const nameResult = meName.includes("i")
 
 

