// Bài 1

let ex1 = document.querySelector(".ex1")

let content = '<table border="2">'

for (let i = 0; i < 10; i++) {
    content += '<tr>'
    for (let j = 1; j <= 10; j++) {
        content += `<td> ${(i * 10 + j)} </td>`
    }
    content += '</td>'
}
content += '</table>'

ex1.innerHTML += content

// Bài 2

function isPrime(num) {

    let s = Math.sqrt(num)

    for (let i = 2; i <= s; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// bài 2

const ex2 = document.querySelector(".ex2")
const ex2_result = document.querySelector("#ex2_result")
const btn_ex2 = document.querySelector(".btn_ex2")
const ipt_ex2 = document.querySelector("#ipt_ex2")

btn_ex2.addEventListener("click", () => {
    let array = []
    array = ipt_ex2.value.split(' ').map(Number)
    console.log(array);

    let content = 'Các số nguyên tố là: '
    array.forEach(item => {
        if (isPrime(item)) {
            content += ` ${item}`
        }
    });

    ex2_result.innerHTML = content
})

// bài 3

const ex3 = document.querySelector(".ex3")
const ex3_result = document.querySelector("#ex3_result")
const btn_ex3 = document.querySelector(".btn_ex3")
const ipt_ex3 = document.querySelector("#ipt_ex3")

btn_ex3.addEventListener("click", () => {
    
    let sum = 0 
    for(let i = 2; i <= (ipt_ex3.value * 1) ; i++) {
        sum += i
    }

    sum += (ipt_ex3.value * 1) * 2

    ex3_result.innerHTML = sum
})

// bài 4

const ex4 = document.querySelector(".ex4")
const ex4_result = document.querySelector("#ex4_result")
const btn_ex4 = document.querySelector(".btn_ex4")
const ipt_ex4 = document.querySelector("#ipt_ex4")

btn_ex4.addEventListener("click", () => {

    let value = ipt_ex4.value * 1

    let content = `Các ước số của ${value} là: ${value} `

    for(let i = Math.floor(value / 2); i >= 1; i--) {
        if (value % i == 0) {
            content += i + ' '
        }
    }
    ex4_result.innerHTML = content
})

// bài 5

const ex5 = document.querySelector(".ex5")
const ex5_result = document.querySelector("#ex5_result")
const btn_ex5 = document.querySelector(".btn_ex5")
const ipt_ex5 = document.querySelector("#ipt_ex5")

btn_ex5.addEventListener("click", () => {

    let array = []
    array = ipt_ex5.value.split('')
    
    content = 'Chuỗi nghịch đảo là '
    for(let i = array.length - 1; i >= 0; i--) {
        content += array[i] 
    }

    ex5_result.innerHTML = content
})