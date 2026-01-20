//سوال اول
for(let i =1 ; i<=10 ; i++){
    console.log(i)
}
//سوال دوم
for(let a =1 ; a<=20 ; a+=2){
   console.log(a)
}
//سوال سوم
let total = 0;
for(let t =1 ; t<=100 ; t ++){
    total+=t;
    console.log(total)
}
//سوال چهارم
const number = 7 ;
for(let n = 1; n<=12 ; n++){
    console.log(n+"*"+number+"="+n*number);
}
//طریقه دوم برای سوال چهارم
for (let u = 1 ; u<= 12 ; u++){
    console.log(u+"*8="+u*8);
}
//سوال پنجم
for(let b =20 ; b>=1 ; b--){
    console.log(b)
} 
//سوال ششم
for(let c = 1 ; c<=50 ; c+=5){
    console.log(c);
}
//طریقه دوم
for (let d = 1 ; d<= 50; d++){
    if(d % 5 ===0){
        console.log(d)
    }
}
//سوال هفتم
let factorial = 1 ;
for(let f = 1 ; f<=8 ; f++){
    factorial*=f;
}
    console.log(factorial)

//سوال هشتم
let star ="";
for(let s = 1 ; s <= 6 ; s++){
    console.log("*".repeat(s))
}
//طریقه دوم سوال هشتم
for (let S = 1 ; S<=6 ; S++){
    for(let r = 0; r<S ; r++){
        console.log("*")
    }
console.log("");   
}
//سوال نهم
let stars = "";
for(let s = 6 ; s>= 1 ; s--){
    console.log("*".repeat(s))
}
//سوال دهم
const  num = 11 ;
let isPrime = true;
if(num <=1){
    isPrime = false;
}else{
    for(let p = 1; p<Math.sqrt(num);p++){
        if(num%p === 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log("the number is prime");
}
else{
    console.log("the number is not prime");
}
//سوال یازدهم
let tawan = 0 ;
for(let t = 1 ; t<=10 ; t++){
    tawan+=t**2;
}
console.log(tawan);
//سوال دوازدهم
let calculation = 0;
for (let c = 5; c <= 90; c++){
    if(c%9 === 0){
        calculation += 1;
    }
}
console.log(calculation)
//سوال چهاردهم
const list = [15,-19,-3,0,8,12,-7,4];
let positiveTotal = 0;
let negativeTotal = 0;
for(let l = 0; l<list.length; l++){
    if(list[l] > 0){
        positiveTotal += 1 ;
    }else if(list[l] < 0){
        negativeTotal += 1;
    }
}
console.log("positive" +positiveTotal);
console.log("negative" +negativeTotal);