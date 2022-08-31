// Yêu cầu
// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red


const count1 = document.querySelectorAll(".btn-container");

let count2 = count1.querySelector(".prevBtn")
let count3 = count1.querySelector(".nextBtn")


count2.onclick = function () {
    count1.textContent = +count1.textConten + 1 ;
}
count3.onclick = function () {
    count1.textContent = +count1.textConten - 1 ;}



    //////////////////////////////////////////////








