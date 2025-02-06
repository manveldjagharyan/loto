let nextBtn = document.getElementById('nextBtn')
let number = document.getElementById('number')
let n = nextBtn.addEventListener('click', onclick)

let numbers = []

function onclick() {
    let x = Math.round(Math.random() * 100);
    numbers.push(x)
    number.textContent = x

    for(let i in numbers){
        if(i === x){
            return onclick()
        }
    }


    console.log(numbers);
    console.log(x);
}