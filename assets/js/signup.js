function checkFirstname(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

function checkLastname(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

signup_form.addEventListener("submit", function(e){
    e.preventDefault();

    checkValidation([first_name, last_name, email_address, password,]);
    checkLength(first_name, 3, 15);
    checkLength(last_name, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email_address);
    checkFirstname(first_name);
    checkLastname(last_name);
});