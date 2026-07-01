//function =>code on demand 
//function 4 type => 1 =>decleration 2 =>exprition 3 =>arro  4 =>call back

//function declertion =به فنکشن گفته میشود که خود ما معرفی میکنیم اش و از کلمه کلیدی فنکشن استفاده میکنم
//function eprition =>
//بخ مفنکشنی گفته میشود که داخل وریبل معریفی یا تعریف میکنیم
//function arro =>
//یک از شاخه های فنکشن ایکسپریشن است که مادر این نوع فنکشن بجای کلمه کلیدی فنکشن از(<=) استفاده میکنیم 
//اگر در این نوع فنکشن یک دستور داشته باشیم میتوانیم از خیر {} و کلمه کلیدی return بگزریم 
//ما در فنکشن ها دو بحث دیگر هم داریم 
//1 => parameter => 
//به عنوان یک جانشین موقعت استفاده میشود 
//2 => argument =>
//این یعنی قیمت اصلی که به خود میگیرد و استفاده نمیشود
//Hoisting with function =>
//در فنکشن ها البته در فنکشن دیکلریشن استفاده میشود به این معنا مهم نیست که فنکسن را درکجا تعریف میکنید در هر جای بخواهید صدا زده میتوانیید

function sum (a,b){
    console.log(a+b);
}
sum(12,15);
//function experition 
const number = function(a,z){
    console.log(a*z);
}
number(2,8);
//arro function
const name = (name ,lastName)=>{
    console.log(name +" "+lastName);
}
name("nazanin","hussaini");
//restor opretor
function num (...a){
    let total = 0;
    for(let i= 1 ; i< a.length ; i++){
        total = total+a[i];
    }
    console.log(total)
}
num(1,4,3,7,8,8)