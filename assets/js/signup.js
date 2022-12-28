/**
 * DOCU This function validates the first name entered in the field
 * Last Updated: December 28, 2022
 * @param input 
 * @author Kei
*/
function checkFirstname(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

/**
 * DOCU This function validates the last name entered in the field
 * Last Updated: December 28, 2022
 * @param input 
 * @author Kei
*/
function checkLastname(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

/**
 * DOCU This function validates first name, last name, email, and password
 * Last Updated: December 28, 2022
 * @param event 
 * @author Kei
*/
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