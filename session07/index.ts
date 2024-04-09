let a = "7"
console.log("hello ",a);

/*
    1. array: 2 cách khai báo

*/ 

let student : string[] = ["hoa","5"]  //kiểu dữ liệu và array

let numbers: Array<number>=[5,6,8]  // array và kiểu dữ liệu


/*
    2. object
*/

let cat:{name:string,height:number,color:string} ={
    name:"tomy",
    height:25,
    color:"white"
}
cat.color="black"

enum Role{
    ADMIN=5,
    USER,
}

let person : {name : string, age : number, role : Role.ADMIN}= {
    name:"minh",
    age: 20,
    role:5
}

function sayHello():void{
    console.log("xin chào ptit");
    return;
}
console.log(sayHello());

function sum(a:number,b:string):string{
    return a+b;
}
console.log(sum(5,"6"));


/*
    unknows : không biết chưa biết
    cũng giống như any nhưng nó chặt hơn
    khi sử dụng phải kiểm tra

*/

    function typeAny(userName:any):void{
        if(typeof userName == "string"){
            console.log("userName",userName.toUpperCase()); 
        }else{
            console.log("userName",userName);
        }
    }
    typeAny("Hoa")


    /*
        6. never
        thường dùng trong vòng lặp vô tận, không có điểm kết thúc
    */

        function typeNever():never{
            while(true){
                console.log("đây là vòng lặp tuần hoàn");
            }
        }
        //   typeNever();