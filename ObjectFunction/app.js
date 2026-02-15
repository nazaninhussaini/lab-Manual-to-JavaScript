const mobileInfo = {
    company :"Sumsung",
    model :"A51",
    monitor: "HD 412x915",
    RAM: "4GB",
    Storage: "128GB"
}
//ما سه نوع حلقه for داریم
//1 for ساده که در هر نوع از دیتا تایپ ها استفاده میشود
//2 for of این نوع فور در استرینگ و اری استفاده میشود
//3 for inاین نوع فور مخصوص object است 
//ما برای استفاده از function های اماده در object یک راه را خواندیم
//syntax = Object.Keys(varible name);

const result = Object.keys(mobileInfo);
//این میتود برای اینکه به کلید ها دسترسی داسته باشیم استفاده میشود
const result1 = Object.values(mobileInfo);
//این میتود باری اینکه به قیمت ها دسترسی داشته باشیم استفاده میشود
const revers = Object.entries(mobileInfo);
//این میتود object مان را به اری تو در تو تبدیل میکند
const revers1 = Object.fromEntries(revers);
//این میتود اری مان را object تبدیل میکند
const value = Object.assign(mobileInfo)
//این میتود باری این استفاده میشود که مارا هم به کلید هم به قیمت به دسترس میسازد

const studentSpecifications ={
    name : "Nazanin",
    lastName : "Hussaini",
    age : 18,
    score : 98
}
const behzad = Object.create(null,{
    name :{
        value:"Ali Behzad",
        writable :true,
        enumerable: true
    },
    lastName:{
        value: "Husaaini",
        writable :true,
        enumerable: true
    },
    age :{
        value: 20,
        writable :false,
        enumerable :true
    },
    score :{
        value : 100,
        writable :false,
        enumerable : false
    }
})
//freezاین میتود برای این استفاده میشود که ما نمی توانیم در ان نه دیتاوارد کنیم نه تغییرات اورده میتوانیم
const freezeBehzad = Object.freeze(behzad);
//isFrozenاین متیود برای این استفاده میشود که که ببینیم یا ای object مان فریز شده یا خیر
console.log(Object.isFrozen(behzad));
console.log(Object.isFrozen(freezeBehzad));
//seal این میتود برای این استفاده میشود که ما میتوانیم تغییرات وارد کنیم اما نمی توانیم دیتا اضافه کنیم 
const freezeStudent = Object.seal(studentSpecifications);
//isSeald این میتود برای این استفاده میشود که ببینیم ایا این   object  متن seal شده یا خیر
console.log(Object.isSealed(studentSpecifications));
console.log(Object.isSealed(freezeStudent));