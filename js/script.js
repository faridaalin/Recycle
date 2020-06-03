const year = new Date().getFullYear();
const footer = document.querySelector(".copyright").innerHTML = `<p class="copyright">Copyright &copy; ${year} Re-Cycle</p>`;


const form = document.querySelector('form');


form.addEventListener('submit', validateForm)

function validateForm(e) {
    e.preventDefault()

    let isValid = false;
    
    const name = document.querySelector('#name'),
    nameValue = name.value.trim().length;

    if(nameValue < 3) {
        name.parentElement.style.borderColor = "#dc1c37"
        name.parentElement.style.backgroundColor = "#f9f2f2"
        isValid = false;
    } else {
        name.parentElement.style.borderColor = "#02c39a"
        name.parentElement.style.backgroundColor = "transparent"
        isValid = true;
    }

    const email = document.querySelector('#email'),
    emailValue = email.value.trim().length;

    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    function emailValidation(email) {
        if(email)regExEmail.test(email)
    }

    if(emailValue < 3 && !(emailValidation(email.value))) {
        email.parentElement.style.borderColor = "#dc1c37"
        email.parentElement.style.backgroundColor = "#f9f2f2"
        isValid = false;
    } else {
        email.parentElement.style.borderColor = "#02c39a"
        email.parentElement.style.backgroundColor = "transparent"
        isValid = true;
    }

    const comment = document.querySelector('#comment'),
    commentValue = comment.value.trim().length;

    if(emailValue < 3) {
        comment.parentElement.style.borderColor = "#dc1c37"
        comment.parentElement.style.backgroundColor = "#f9f2f2"
        isValid = false;
    } else {
        comment.parentElement.style.borderColor = "#02c39a"
        comment.parentElement.style.backgroundColor = "transparent"
        isValid = true;
    }

    if(isValid) form.submit()
  
}

    
