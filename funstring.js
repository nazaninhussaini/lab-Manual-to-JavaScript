function geText (text){
    let result = "";
    for(let i=0; i<text.length;i++){
        if((text[i]>="a"&& text [i]<="z")|| 
            (text[i]>="A" && text[i]<"Z")){
                result += text[i]
            }
    }
    return result;
}
const text = geText("Hi1 Nazanin2 how3 are4 you5")

const greeting = "      hi iam nazanin     "
const namaTrim = greeting.trim();
const get = greeting.toUpperCase();
