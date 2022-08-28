// const h1 = document.createElement("h1");
// h1.textContent = "1234";
// h1.classList.add("heading");
// h1.id = "heading1"

// const img = document.createElement("img");
// img.src = "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1-1653445668-308-width740height476.jpg";
// img.alt = "anh dẹp";

// document.getElementById("app").append(h1,img)

// // // tạo tất cả mọi thứ thông qua js
// // document.createElement() // tạo thẻ
// // document.createTextNode() // tạo text
// // document.createAttribute() // tạo thuộc tính

// // // tạo xong thì cần chèn vào cấu trúc html
// // // thông qua before / after / append / prepend

// // img.insertAdjacentText() // chèn dạng chuỗi
// // img.insertAdjacentHTML() // chèn chuỗi html , tương tự innerHTml
// // img.insertAdjacentElement() // chèn node đc tạo 

// // // nếu node đã xuất hiện trong dom , thì các phương thức chỉnh sửa
// // // sẽ chỉ thay đổi vị trị của node , chứ ko chèn node mới


// // dùng innerHTML
// document.getElementById("app").innerHTML = 
// " <h2 class= `heading`>haaaaaaaaaaaaaa</h2>" ;
// // dùng innerHTML khi có sẵn cấu trúc HTML
// // và không cần thay đổi / chỉnh sửa quá nhiều


// // tạo các hàm . hàm này sẽ tạo 1 thẻ img
// function createImage(src, alt) {
//     const img = document.createElement("img")
//     img.src= src ;
//     img.alt = alt ;
//     return img ;
    
// }

// document
// .getElementById("app")
// .after(
//      createImage( "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1-1653445668-308-width740height476.jpg",
//            "anh dẹp"
//      ),

//      createImage( "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1-1653445668-308-width740height476.jpg",
//           "anh dẹp"
//      ),

//      createImage( "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1-1653445668-308-width740height476.jpg",
//           "anh dẹp"
//      )
// )

const data = [
    {
    slug : "1",
    cover : "https://s199.imacdn.com/vg/2022/08/26/69542ac365a4ceaf_691065b247e2ebae_23003166150547413.jpg",
    title : "RENMEI KUUGUN KOUKUU MAHOU ONGAKUTAI LUMINOUS WITCHES ",
    episode :" tap 20 ma pháp sư",
    views : 33333,
}

,
{
    slug : "1",
    cover : "https://s199.imacdn.com/vg/2022/08/26/69542ac365a4ceaf_691065b247e2ebae_23003166150547413.jpg",
    title : "RENMEI KUUGUN KOUKUU MAHOU ONGAKUTAI LUMINOUS WITCHES ",
    episode :" tap 20 ma pháp sư",
    views : 33333,
}
,
{
    slug : "1",
    cover : "https://s199.imacdn.com/vg/2022/08/26/69542ac365a4ceaf_691065b247e2ebae_23003166150547413.jpg",
    title : "RENMEI KUUGUN KOUKUU MAHOU ONGAKUTAI LUMINOUS WITCHES ",
    episode :" tap 20 ma pháp sư",
    views : 33333,
}
,
{
    slug : "1",
    cover : "https://s199.imacdn.com/vg/2022/08/26/69542ac365a4ceaf_691065b247e2ebae_23003166150547413.jpg",
    title : "RENMEI KUUGUN KOUKUU MAHOU ONGAKUTAI LUMINOUS WITCHES ",
    episode :" tap 20 ma pháp sư",
    views : 33333,
}


];


// tạo giao diện tĩnh trước

function  list1(item) {
    
return `<div class="movie">
<div class="movie-thumbnail">
    <img src="${item.cover}" alt="">
</div>

<div class="movie-title">
    ${item. title}
</div>

<div class="movie-episode">
${item. episode}
</div>

<div class="movie-view">
 ${item.views}
</div>
</div>`

}
// chuyển đổi dữ liệu thành html
document.querySelector(".list-movie").innerHTML =  data
.map(list1)//
.join("")



function click1 ( ) {
    alert(".....................................");
    
}
// 3 cách để chỉ định hàm cho event
//1 gắn thông qua thuộc tính sự kiện của thẻ html
// 2 gắn thông qua thuộc tính dom
// gán thông qua phương thức addeventlistner/removeEventlistner


// 1 tên sự kiện / nhóm sử kiện 
// 2 xảy ra khi nào 
//  3 cách gán trình sử lí cho sự kiện mình quan tâm
// 4 trình sử lí có thể nhận thêm cái event obj 
// bao gồm thông tin chi tiết hơn về sự kiện (tùy thuộc vào từng sự kiện)
//5 một sô thành phần có sẵn sự kiện mặc định có thể tắt hoặc bật thông event obj







