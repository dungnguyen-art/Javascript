let str = prompt("Nhập chuỗi vào nhé:D ");
console.log(str);
let newStr = "";
for(let i = str.length-1;i>=0;i--){
    newStr += str[i];
}
console.log(newStr);
