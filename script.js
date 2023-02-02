// Bài 1

let ex1 = document.querySelector(".exercise_1")

let content = '<table border="2">'

for (let i = 0; i < 10; i++) {
    content += '<tr>'
    for (let j = 1; j <= 10; j++) {
        content += `<td> ${(i * 10 + j)} </td>`
    }
    content += '</td>'
}
content += '</table>'

ex1.innerHTML = content

// Bài 2

function isPrime(num) {

    let s = Math.sqrt(num)

    for (let i = 2; i <= s; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// bài 2

const ex2 = document.querySelector(".exercise_2")
const ex2_result = document.querySelector(".ex2_result")
const btn_ex2 = document.querySelector(".btn_ex2")
const ipt_ex2 = document.querySelector("#ipt_ex2")

let array = []

btn_ex2.addEventListener("click", () => {
    array.push(ipt_ex2.value * 1);
    console.log(array);
})