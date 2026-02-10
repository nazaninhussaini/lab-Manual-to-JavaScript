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