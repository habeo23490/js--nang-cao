console.log([1,2,4].filter((n)=> n%2===0));
//arrow function .


const thuc = {
    name : " hà",
    age : 22 ,
}

// this là 1 toán tử / giá trị đặc biệt tồn tại trong 1 hàm
// this hoạt động như 1 biến thuông thường


// const sum = (a,b,...others) => {
//    others.reduce((total,n)=> (total+=n),a+b)
// };
// sum(1,2,3,4,5)
let arr =[1,2,3];

// sao chép mảng | đối tượng
let copy = [1,2,3,...arr,4,5];

let obj = {
    name : "HA",
    age : 30 ,
    qwertyyuuuewrew: true ,
}
// với ojb thì tách theo key (bắt buộc)
//có thể đổi tên 
let { name , age , qwertyyuuuewrew: total} = obj;
console.log(name,age,total);

let clon = {
    ...obj ,
}
let arr1 = [1,2,3,4,5];
// với arr thì tách theo index
let [a,b] = arr1 ;
// let [x, _ , y] = arr1 ;

let ojb1 = {
    firsname :  "nguyễn",
    lastname: "hà",
}

const getFullname = ({firsname:f ,lastname:l}) => 
f + " " + l ;

console.log(getFullname(ojb1));



