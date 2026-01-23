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
    if(num %2 ===0){
        console.log("عدد جفت است")
    }else{
        console.log(" عدد تاق است");
    }
}
odd(10);
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
