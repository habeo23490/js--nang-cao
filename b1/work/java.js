// 1. Thay đổi nội dung của thẻ title thành giá trị của heading
document.title = "Thầy giáo Ba đẹp trai";
// 2. Thay đổi nội dung của thẻ h1 thành giá trị của heading
const name11 = document.body.firstElementChild.innerHTML =  "Thầy giáo Ba đẹp trai";
console.log(name11);
// 3. Thay đổi src của thẻ img thành giá trị của avatar
const img22 = document.body.querySelector(".avatar").scr ;
img22 = "https://i.imgur.com/2rP9dFO.png";
console.log(img22);



// 4. Thay đổi src của thẻ link thành giá trị của profile




// 5. Thay đổi nội dung của thẻ li đầu tiên trong thẻ ul thành Code application


// 6. Thay đổi nội dung của thẻ li cuối cùng trong thẻ ul thành Sleep


// 7. Thay đổi nội dung của div thành thời gian hiện tại theo mẫu Bây giờ là giờ:phút:giây,
// ngày ngày/tháng/năm
// 8. Đếm số từ trong đoạn văn p.bio xem có bao nhiêu từ Ba (không phân biệt chữ hoa chữ
// thường) và thêm nội dung vào thẻ p.num-of-words bên dưới thông báo kết quả dạng Ở đoạn
// văn trên có xx từ 'Ba'

const p = document.querySelector(".paca")


// 9. Thêm một hàng mới vào table (tham khảo API của HTMLTableElement)
// 10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung Thầy giáo Ba siêu cấp đẹp trai