let day = prompt("Nhập ngày vào đê: ");
console.log(day);
let month = prompt("Nhập tháng vào đê đê: ");
console.log(month);
let year = prompt("Nhập năm vào cái nhể: ")
console.log(year);

let str = "";
// thang co 30 ngay
if(day > 0 && day <= 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)){
        str += "hople";
        console.log("Hợp lệ");
        if(day < 30)
            day++;
        else{
            day = 1;
            month++;
        }
    }

else if(month == 2 && day <= 29 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))){
        console.log("Hợp lệ");//năm nhuận
        str += "hople";
        if(day < 28)
            day++;
        else{
            day = 1;
            month ++;
        }
}
else if(month == 2 && day <= 28){
        console.log("Hợp lệ");
        str += "hople";
        if(day < 28)
            day ++;
        else {
            day = 1;
            month++;
        }
}
else if(day > 0 && day <= 31 && month != 2 && month <= 12 && month >= 1){
        console.log("Hợp lệ");
        str += "hople";
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
        str = "khonghople";
        console.log("Không hợp lệ");
}
//5b
if(str == "hople"){
    console.log(day + "/" + month + "/" + year);
}
