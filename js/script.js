let inputPassword = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let currentPassword
let currentConfirmPassword
console.log(inputPassword);
console.log(confirmPassword);

inputPassword.addEventListener("input",function(e){
    currentPassword = e.target.value;
    checkPassword()
})
confirmPassword.addEventListener("input",function(e){
    currentConfirmPassword = e.target.value;
    checkPassword()
})

function checkPassword(){
    if (currentConfirmPassword != currentPassword){
        confirmPassword.setCustomValidity("Password do not match!")
        confirmPassword.setAttribute('style','border: 2px solid red;')

        inputPassword.setCustomValidity("Password do not match!")
        inputPassword.setAttribute('style','border: 2px solid red;')
    }
    else{
        confirmPassword.setCustomValidity("")
        confirmPassword.setAttribute('style','2px solid rgb(87, 87, 255)')

        inputPassword.setCustomValidity("")
        inputPassword.setAttribute('style','2px solid rgb(87, 87, 255)')
    }
}

