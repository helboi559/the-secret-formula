

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

//part3 ---------------------Haircut appointment 
let date = document.querySelector('#date')
let barber = document.querySelector('#barber')
let length = document.querySelectorAll('input[name="length"]')
let makeAppt = document.querySelector('#makeAppt')
// console.log(length)
makeAppt.addEventListener('click',()=> {
    let whatLen = ""
    for(let len of length) {
        if (len.checked) {
            whatLen += len.value
        }
    }
    let msg = `Haircut scheduled for ${date.value} with ${barber.value} for ${whatLen} hair.`
    alert(msg)
})

//--------------------------
//part 4 -------------------create account!

let user = document.querySelector('#user')
let email = document.querySelector('#email')
let pw = document.querySelector('#pw')
let confirmPw = document.querySelector('#confirm-pw')
let makePw = document.querySelector('#makepw')
console.log(makePw)
makePw.addEventListener('click',()=> {
    // let msg = ""
    // console.log(pw.value.length)
    
    if(pw.value === confirmPw.value) {
        pw.value= '**********'
        let msg = `Your user email is: ${email.value} and your password is: ${pw.value}. ACCOUNT CREATED!`
        alert(msg)
    } else {
        alert(`Your username and password dont match! Try again.`)
    }
    
})

//-------------------------------------------