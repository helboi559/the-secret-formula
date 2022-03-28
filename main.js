

//part 1 ---------------- ALERTER
let textBox = document.querySelector('#text-box')

let submitButton = document.querySelector('#submit-button')
// console.log(textBox)
//access value of forms using value
submitButton.addEventListener('click',()=> {
    alert(textBox.value)
})
//-------------------------------------

//part 2 ----------------- Sandwich builder
//identify button/"boxlist"
let makeSandwich = document.querySelector('#make-sandwich input')
let boxes = document.querySelectorAll('input[name="ingredient"]')
// console.log(boxes)
makeSandwich.addEventListener("click", (event)=> {
    event.preventDefault();
    let message = "Your sandwich contains: "
    for(let box of boxes) {
        if(box.checked) {
            message += `${box.value}, `
        }
    }

    alert(message)
})

//----------------------------