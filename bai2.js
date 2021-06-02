let str = prompt("Nhập chuỗi vào đi nhé: ");
console.log(str);
let tmp = "";
let newStr = "";
tmp = str[0].toUpperCase();
newStr += tmp;
for(let i=1;i<str.length;i++){
    if(str[i] == " " && str[i+1] >= 'a' && str[i+1] <='z'){
            tmp  = str[i+1].toUpperCase();
            newStr += " ";
            newStr += tmp; 
            i++;
    }
    else
        newStr += str[i];       
}
console.log(newStr);
