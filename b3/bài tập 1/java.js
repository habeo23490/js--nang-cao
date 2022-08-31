const a = document.querySelector(".seach1")
const b = document.querySelector(".seach2")
const c = document.querySelector(".cars")
const d = document.querySelector("form")
d.onsubmit = function(e) {
    e.preventDefault();
const result = (a.value * c.value) / b.value;
console.log(result);
}

