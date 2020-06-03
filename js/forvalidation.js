

const form = document.querySelector('form');


form.addEventListener('submit', validateForm)

function validateForm(e) {
    e.preventDefault()

    let isValid = true;

    
    const name = document.querySelector('#name'),
    nameValue = name.value.trim().length,
    nameError = document.querySelector('#nameError');

    if(nameValue > 0) {
        name.parentElement.classList.remove('error');
        name.parentElement.classList.add('valid');
        nameError.style.display = "none"

    } else {
        name.parentElement.classList.add('error');
        nameError.style.display = "block"
        isValid = false;
    }

    const email = document.querySelector('#email'),
    emailValue = email.value.trim().length,
    emailError = document.querySelector('#emailError');

    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    function emailValidation(email) {
        if(email)regExEmail.test(email)
    }

    if(emailValue > 3 && !(emailValidation(email.value))) {
        email.parentElement.classList.remove('error');
        email.parentElement.classList.add('valid');
        emailError.style.display = "none"
    } else {
        email.parentElement.classList.add('error');
        emailError.style.display = "block"
        isValid = false;
    }


    const comment = document.querySelector('#comment'),
    commentValue = comment.value.trim().length,
    commentError = document.querySelector('#commentError');

    if(commentValue > 10) {
        comment.parentElement.classList.remove('error');
        comment.parentElement.classList.add('valid');
        commentError.style.display = "none"
    } else {
        comment.parentElement.classList.add('error');
        commentError.style.display = "block"
        isValid = false;
    }

    if(isValid) {
        this.style.display = "none"
        const successMessage = document.querySelector('.successMessage').style.display = "block"
    }
}