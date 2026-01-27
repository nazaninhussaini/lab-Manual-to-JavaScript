let list = [];
while(true){
const number= Number(prompt("Enter a naumber"));
    if(number == 0){
        break;
    }
    list.push(number)
} 
let positiveNumbers = 0;             
let negativeNumbers = 0;             
let i = 0;
while(i<list.length){
    if(list[i]>0){
        positiveNumbers += 1;
    }else if(list[i]<0){
        negativeNumbers+= 1
    }
    i++
}
console.log("مجموع اعداد مثبت "+positiveNumbers);
console.log("مجموع اعداد منفی "+negativeNumbers);

//سوال دوم
let numbers = 123456789;
let whileNumbers = numbers.toString()
let total =0;
let n = 0;
while(n<whileNumbers.length){
    total += 1;
    n++;
}
console.log(total);
//سوال سوم
let number3 = 123;
let count = 0;
while(number3 >0){
    count++;
    number3 = Math.floor(number3/10);
} 
console.log(count)
//سوال چهارم
let number1 = "1234";
let number2 = "4321";
if(number1.length === number2.length){
    
}
else{
    console.log("پلندروم نیستند")
}
// س.ال پنجم
let avalia = 23;
let isPrime = true;
if(avalia <=1){
    isPrime = false;
}
else{
    let i =0;
    while(Math.sqrt(avalia)){
        if(avalia%i ===0){
            isPrime = false;
            break;
        }
        i++;
    }
}