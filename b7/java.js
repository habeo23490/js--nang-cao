// $ -JQuery

// console.log($);

// $(function (){
//     const h1 = document.querySelector("h1");
//     console.log("h1");
// })

//tìm kiếm phần tử 

// luôn trả về 1 mảng 

// $(Selector)
// $(Element)
// $(Node)

//các đối tượng JQuery thì thường 
const sh1 = $("li,h1")
console.log(sh1);

const p = document.querySelector("p")
const $p = $(p);
console.log($p);

//chỉnh sửa nội dung , thuộc tính
//lấy nội dung 
// chia hai phương thức getter/setter
console.log($p.text());
$p.text("hello");

// console.log(h1.id);

console.log(sh1.attr("id"));
sh1.attr({ id :"hekkkkkk",lang: "vn"});

//chèn phần tử , di chuyển , xóa phần tử 

const $ul = $("ul");
console.log($ul.html());//get
$ul.html("<li>dfbkdusgvudsfsd</li>")

// addClass , removeClass , toggleClass , hasClass

$ul.removeClass("my-list")
$ul.removeClass("my-list")


//style
$ul.css({
    backgroundColor : "red",
    color : "white",
});

//them , tạo , xóa . di chuyển node
//innerHTML
// ul.innerHTML += "<li> mục 3 </li>";
//append , prepend , after , before
//appendTo, prependTo

$ul.append("<li> mục 3 </li>");
// parent.append(child)
// child.appendTo(parent)
// URL.append()

//tạo thẻ 
$("<li>mục 10</li>").appendTo($ul);

$("<div />", {
    class :"hellooo",
    text :"chào bạn",
}).appendTo($ul);


// sự kiện

// ultilities methods : click , mousemove , keypress
// on | off
$ul.on("click", function (eventOjb) {
    console.log("click");
    
})



//gán sự kiện 