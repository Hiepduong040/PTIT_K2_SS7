"use strict";
let a = "7";
console.log("hello ", a);
/*
    1. array: 2 cách khai báo

*/
let student = ["hoa", "5"]; //kiểu dữ liệu và array
let numbers = [5, 6, 8]; // array và kiểu dữ liệu
/*
    2. object
*/
let cat = {
    name: "tomy",
    height: 25,
    color: "white"
};
cat.color = "black";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
})(Role || (Role = {}));
let person = {
    name: "minh",
    age: 20,
    role: 5
};
function sayHello() {
    console.log("xin chào ptit");
    return;
}
console.log(sayHello());
function sum(a, b) {
    return a + b;
}
console.log(sum(5, "6"));
/*
    unknows : không biết chưa biết
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra

*/
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log("userName", userName.toUpperCase());
    }
    else {
        console.log("userName", userName);
    }
}
typeAny("Hoa");
/*
    6. never
    thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/
function typeNever() {
    while (true) {
        console.log("đây là vòng lặp tuần hoàn");
    }
}
//   typeNever();
