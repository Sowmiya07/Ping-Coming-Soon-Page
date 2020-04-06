const submitEmail = document.getElementById('submit-email');
const inputEmail = document.getElementById('email');
const error = document.getElementById('error');
const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail(email) {
   return emailPattern.test(email);
}

submitEmail.addEventListener('click', function(event) {
    event.preventDefault();
    error.style.display = 'none';
    isValid = validateEmail(inputEmail.value)
    if(!isValid) {
        error.style.display = 'block';
    }
});