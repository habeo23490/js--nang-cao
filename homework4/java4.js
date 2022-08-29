// Cho mảng chứa danh sách các loại quả
const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
const fruit = document.querySelector(".fruit-list");
for (const key of fruitList) {
    const li = document.createElement("li")
    li.textContent = key ;
    fruit.append(li);
}