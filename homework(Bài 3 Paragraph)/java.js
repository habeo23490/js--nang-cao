// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const string = document.querySelector("p").innerHTML ;
console.log(string);
const arr = string.split(" ");
    console.log(arr);


   
    for(let key in arr) {
        if(key.length > 8) {
            console.log(key);
        }
       break ; 
    }
    


// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
// Thay thế các ký hiệu ? => 🤔, ! => 😲