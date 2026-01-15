//سوال اول
let number = (prompt("Enter a number"));
if(isNaN(number)){
    console.log("قیمت وارد شده عدد نیست");
}
else{
    if(number > 0){
    console.log("این نمبر مثبت است")
}
else if(number <0){
    console.log("این نمبر منفی است")
}
else {
    console.log("این عدد صفر است")
}
}

//سوال دوم
let odd = 41;

if(odd%2 === 0 ){
    console.log("این عدد مثبت است")
}
else{
    console.log("این عدد منفی است")
}
//سوال سوم

const age = prompt("سن تان را وارد کنید")
if(!isNaN(age)){
    if(age>=18){
    console.log("این رای داده میتواند")
}
else{
    console.log("این رای داده نمیتواند")
}
}
//سوال چهارم
const char = prompt("Enter a vowel letter");
const harf = char.toLocaleLowerCase();
if(isNaN(char) && char.length === 1){
    if(harf === "a" ||harf === "e" || harf === "i" || harf === "o" || harf === "u"){
        console.log("شما درست انتخاب کنید");
    }
    else{
        console.log("شما درست انتخاب نکردید")
    }
}
//سوال پنجم
let time = 23;
if(time >=5 && time <= 10){
    console.log("صبح بخیر")
}
else if (time >= 11 && time <= 15){
    console.log("ظهر بخیر")
}
else if (time >= 16 && time <=19){
    console.log("عصر بخیر");
}
else{
    console.log("شب بخیر")
}
//سوال ششم
const a = 23;
const b = 43;
const c = 53;
if( x>y && x>z){
    console.log ("عدد اولی بزرگ است ");
}
else if(y>z){
    console.log ("عدد دومی بزرگ است");
}
else{
    console.log("عدد سومی بزرگ است");
}
//سوال هفتم
const gread = 78;
if(gread <= 100 && gread >= 90 ){
    console.log("group A");
}
else if(gread >= 80){
    console.log("group B")
}
else if(gread >= 70){
    console.log("group C");
}
else if(gread >= 60){
    console.log("group D");
}
else{
    console.log("is feild");
}

//سوال هشتم
const color = "yallow";
if(color === "green"){
    console.log("حرکت")
}
else if(color === "yallow"){
    console.log("آهسته");
}
else{
    console.log("ایست");
}
//سوال نهم
const dama = 10;
if(dama >= 35){
    console.log("خیلی گرم است");
}
else if(dama <=34 && dama >= 20){
    console.log("معتدل است");
}
else{
    console.log("سرد است");
}
//سوال دهم
const Taq = 110;
if(Taq%2 === 0 && Taq>0){
    console.log("این در محدوده است")
}
else{
    console.log("این در محدوده نیست")
}
