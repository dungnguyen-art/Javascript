let day;
console.log(day);
let month;
console.log(month);
let year;
console.log(year);

let str = "";
if(day >0 && day <= 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)){
        str = "Hợp lệ";
        console.log("Hợp lệ");
        if(day < 30)
            day++;
        else{
            day = 1;
            month++;
        }
    }
else if(month == 2 && day <= 28 && year % 400 ==0){
        console.log("Hợp lệ");
        str = "Hợp lệ";
        if(day <28)
            day++;
        else{
            day = 1;
            month ++;
        }
}
else if(month == 2 && day <= 29){
        console.log("Hợp lệ");
        str = "Hợp lệ";
        if(day < 29)
            day ++;
        else {
            day = 1;
            month++;
        }
}
else if(day > 0 && day < 31 && month != 2 && month <= 12 && month >= 1){
        console.log("Hợp lệ");
        str = "Hợp lệ";
        if(day < 31)
            day++;
        else if(month < 12){
            day = 1;
            month++;
        }
        else{
            day = 1;
            month = 1;
            year++;
        }
}

else{
        str = "Không hợp lệ";
        console.log("Không hợp lệ");
}
//5b
if(str == "Hợp lệ"){
    console.log(day + "/" + month + "/" + year);
}
