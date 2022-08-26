console.log(document);
console.log(document.body);// thẻ body
console.log(document.links);// tất cả thẻ link trên trang

document.title = "míbdfldsdflhsdfh"

console.log(document.body.childElementCount);
let x = document.getElementsByTagName("img") ;
console.log(x);

// querySelector chỉ chọn 1 ( trả về tham chiếu trực tiếp )
// querySelectorAll trả về toàn bộ tức là 1 notelist


const h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "ha dep trai" ;
// chuyển nội dung thẻ (thô)
const img = document.querySelector("img")
console.log(img);
//dataset thêm thuộc tính vào phần tử mình muốn



