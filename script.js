const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('confirm-password');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkValues();
})


function checkValues() {
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const confirmPasswordValue = confirm-password.Value.trim();


    if (usernameValue === "") {
        setErrorFor(username,'Usernmae cannot be blank')
    }else{
        setSuccessFor(username)
    }
}
function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = form.querySelector('small');

    small.innerHTML = message;

    formControl.className = 'form-control error'
}