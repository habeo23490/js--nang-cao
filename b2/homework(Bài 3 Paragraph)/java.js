// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const text = document.querySelector("p").innerHTML ;
console.log(string);
const words = text.split(" ");
 const replace = words.map( (w) => {
    const punc =w.[w.length-1];

    if (isAlphabe(punc)) {
        return w.length >= 0 
        ? `<span style="background-color:yellow;" > ${w} </span>`
        : w ;
       
    }
    else {
            
    }
 })

 function isAlphabe(char) {
    return ("a" <= char && char <= "z" ) || ("A" <= char && char <= "Z") ;
 }
   

    


   
    // for(let key in arr) {
    //     if(key.length > 8) {
    //         return 
    //     }
    //    break ; 
    // }
    


// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const a = document.createElement("a");
a.href = "facebook.com";
a.innerHTML = "favebook";
document.querySelector(".worrd").after(a);






// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const div = document.createElement("div");
div.textContent = arr.length + "từ" ;
document.querySelector(".worrd").after(div);



// Thay thế các ký hiệu ? => 🤔, ! => 😲


// for(let key in arr) {
//     if(key == "?") {
//         return key = "🤔";
//     }
//     else if (key ==  "!" ) {
//         return key = "😲";
//     }
//     break ;

// }






////////////////////////////////////////////////////////////////////////////////////////////