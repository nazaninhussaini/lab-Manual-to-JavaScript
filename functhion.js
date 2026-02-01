//سوال اول
function squareRoot (num){
    return num*num
}
console.log (squareRoot(9))
//سوال دوم
function num(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b)
    }
}
num(20,16)
//سوال سوم
function greating(name,lastName){
    console.log("سلام"+" "+name+lastName+" "+"خوش امدید")
}
greating("نازنین ","حسینی ");
//سوال چهارم
function odd (num){
    if(num %2 ===0) console.log("عدد جفت است");
    else console.log(" عدد تاق است");
}
odd(10);
//سوال پنجم
function degree (add){
    console.log((add* 9)/ 5 + 32 +"farnhait");
}
degree(4)
//سوال ششم
function factorial(fac){
    let result = 1;
    for(let i=1; i<=fac ;i++){
        result*=i;
    }
    console.log(result)
}
factorial(4);
//سوال هفتم
function string (text){
    let revers = ""
    for (let i = text.length-1 ; i >=0 ; i--){
        revers = revers + text[i];
    }
    return revers ; 
}
const textCont = string("سلام")
console.log(string("خانه"));
//سوال هشتم
function sum (list){
    let total = 0;
    for(let i =0 ; i<list.length ; i++){
        total+= list[i];
    }
return total
}
console.log (sum([6,7,8,9,9,6]))
//سوال نهم
const prime = (a)=>{
    let isPrime = true;
    if(a<=1){
        isPrime = false;
    }
    else{
        for(let i=0 ; i<Math.sqrt(a);i++){
            if(a%i === 0){
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
}
console.log(prime(30))
//سوال دهم
//function Anagram (a,b){
//    let str1 = a.replace(/\s/g,'').toLowerCase;
//    let str2 = b.replace(/\s/g,'').toLowerCase;
//    return str1.split('').sort().join('') === str2.split('').sort().join('');
//}
//const result = Anagram("silent","listen");
//سوال یازدهم
function getNumbers(...numbers){
    let max= [0];
    let min= [0];
    for (let i =0 ; i< numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i]
        }
        else if (numbers[i]<min){
            min = numbers[i]
        }
    }
    return{minimum:min , maximum :max}
}
console.log(getNumbers(2,4,5,6));
//سوال دوازدهم
function getText(text){
    let shomarish = {};
    for (let i=0;i< text.length;i++){
        const char = text[i];
        if(shomarish[char]){
            shomarish[char]++;
        }else{
            shomarish[char] = 1;
        }
    }
    return shomarish;
}
console.log(getText("Hi my name is nazanin"))

