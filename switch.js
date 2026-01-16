const number = Number(prompt("Enter a number day"));
switch(number){
    case 1 :
        console.log("روز شنبه");
        break;
    case 2 :
        console.log("روز یکشنبه");
        break;
     case 3 :
        console.log("روز دوشنبه");
        break;
     case 4 :
        console.log("روز سه شنبه");
        break;
     case 5 :
        console.log("روز چهار شنبه");
        break;
     case 6 :
        console.log("روز پنچشنبه");
        break;
     case 7 :
        console.log("روز جمعه");
        break; 
    default :
        console.log("لطفا از عدد 1 تا 7 وارد")                           
}

//سوال دوم
const month = Number(prompt("Enter a number month"));
switch(month){
    case 1 :
        console.log("ماه حمل 31 روز دارد");
        break;
     case 2 :
        console.log("ماه ثور 31 روز دارد");
        break;    
     case 3 :
        console.log("ماه جوزا 31 روز دارد");
        break;    
     case 4 :
        console.log("ماه سرطان 31 روز دارد");
        break; 
     case 5 :
        console.log("ماه اسد 31 روز دارد");
        break;
     case 6 :
        console.log("ماه سنبله 31 روز دارد");
        break;
     case 7 :
        console.log("ماه میزان 30 روز دارد");
        break;
     case 8 :
        console.log("ماه عقرب 30 روز دارد");
        break;
     case 9 :
        console.log("ماه قوس 30 روز دارد");
        break;
     case 10:
        console.log("ماه جدی 30 روز دارد");
        break;        
     case 11:
        console.log("ماه دلو 30 روز دارد");
        break; 
     case 12:
        console.log("ماه حوت 29 روز دارد");
        break; 
    default:
        console.log("لطفا از عدد 1 تا 12 برای دریافت تعداد روز های ماه وارد کنید")            
}
//سوال سوم
const group = prompt("Enter a letter to specify").toUpperCase()
switch(group){
    case "A" :
        console.log("عالی");
        break;
    case "B" :
        console.log("خوب");
        break;
     case "C" :
        console.log("متوسط");
        break;
     case "D" :
        console.log("پایین");
        break;
     case "E":
        console.log("افتضاح");
        break;
     case "F" :
        console.log("ناکام");
        break; 
    default :
    console.log("این حرف وجود ندارد دباره تلاش کنید")
}
//سوال چهارم
const direction = prompt("جهت تان را مشخص کنید تابرای تان رهنمایی کنم.").trim().toLowerCase();
switch(direction){
    case "north":
        console.log("شما به طرف بالا میروید مراقب باشید ")
        break;
    case "south":
        console.log("شما به طرف پایین میروید مراقب باشید");
        break;
    case "east":
        console.log("شما به طرف راست میرویدبه طرف طلوع آفتاب");
        break;
    case "west":
        console.log("شما به طرف چپ میروید به طرف غروب آفتاب");
        break;
    default:
        console.log("شما جهت درست انتخاب نکردید لطفا دوباره امتحان کنید");        
}
//سوال پنجم
const furet = "banana";
switch(furet){
   case "banana":
      console.log("کیله به رنگ زرد و سبز موجود است");
      break;
   case "appul":
      console.log("سیب به رنگ زرد سرخ سبز موجود است");
      break;
   case "oreang":
      console.log ("نارنج به رنک نارنجی موجو است");
      break;
   case "anar":
      console.log("انار به رنگ سفید وسرخ موجود است")         
}