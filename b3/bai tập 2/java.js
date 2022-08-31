// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const news = document.createElement("li")
news.textContent = "24/7 Phone support"
document.querySelector(".list-unstyled").append(news)

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

 const row = document.querySelector(".row");
 row.append(row.children[0]);

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
const proStorage = document.querySelector("#pro-plan")
// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%