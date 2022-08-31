ÉS6

*cú pháp khai báo biến và phạm vi biến
+ var      phiên bản cũ        có  
+ let      ES6                 không
+ const    ES6                 không
*Arrow Funcition
- cú pháp thay thế/ ngắn gọn hơn cho cú pháp khai báo hàm thông thường
+ cú pháp
- thông thường 
function hello = function(who){
    console.log("hello",who);
}

cú pháp ES6
+ sử dụng thay thế cho hàm function thông thường 
+ về cú pháp , không có từ khóa function , sau danh sách tham số có kí tự => 
 + không sử dung từ khóa function , sử dụng => ở giữa phần tham số và thân hàm
 + có thể bỏ qua ( ) khi có 1 tham số 
 + có thể bỏ qua { } nếu phần thân hàm có 1 câu lệnh biểu thức 
 + biểu thức | giá trị ở ngay sau dấu => chính là giá trị return
 + khi có phần thân hàm { } , nếu muốn trả về giá trị vẫn phải dùng return
 + thường arrow function sử dụng để khai báo các hàm callback cho cú pháp ngắn gọn
 + không nên dùng arrow function làm phupwng thức cho đói tượng (ojb method)
- const hello = (who) => {
    consolog.log("hello",who);
}
trong trường hợp ngắn gọn có thể bỏ qua phần thân hàm { }
const hello = who => console.log("hello",who);

arrow function không có this , arguments giống như hàm thông thường

*spread operator ...
- có nhiều cách dùng , vị trí sử dụng sẽ có ý nghĩa và kết quả khác nhau 
+ trong câu lệnh gọi hàm hoặc các tập giá trị (spread operator )
phải là tham số ở vị trí 

*template literals
: cho phép nhúng các giá trị| biểu thức vào trong chuỗi 
+ cú pháp : `` (cặp dấu huyền)
+ nhúng giá trị| biểu thức ${ expression }

let myName =" Ha";
let myAge = 22 ;

ES6
const msg = `hello , iam ${myName} , iam ${myAge}

*Destructuring Assignment
cho phép gán nhanh những giá trị trong mảng | đối tượng cho các biến |tham số 

*module
*classes
*promises