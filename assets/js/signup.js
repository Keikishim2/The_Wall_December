/**
 * DOCU: This function only allows alphabet for the first name field
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function checkFirstName(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

/**
 * DOCU: This function only allows alphabet for the last name field
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function checkLastName(input){
    const name = /^[a-zA-Z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
}

/**
 * DOCU: This function runs validation before the form submits
 * Last Updated: Nov 21, 2022
 * @author Kei Kishimoto
 */
signup_form.addEventListener("submit", function(e){
    e.preventDefault();

    checkValidation([first_name, last_name, email_address, password,]);
    checkLength(first_name, 3, 15);
    checkLength(last_name, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email_address);
    checkFirstName(first_name);
    checkLastName(last_name);
});