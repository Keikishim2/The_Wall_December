/**
 * DOCU: This function checks if the first name is valid else returns an error
 * Last Updated: Nov 20, 2022
 * @param input
 * @author: Kei Kishimoto
 */
function checkFirstName(input){
    const name = /^[A-Za-z]+$/;
    if(input.value.match(name)){
        showSuccess(input);
    }else{
        showError(input);
    }
 }

 /**
 * DOCU: This function checks if the last name is valid else returns an error
 * Last Updated: Nov 20, 2022
 * @param input
 * @author: Kei Kishimoto
 */
 function checkLastName(input){
    const last = /^[A-Za-z]+$/;
    if(input.value.match(last)){
        showSuccess(input);
    }else{
        showError(input);
    }
 }

/**
 * DOCU: This function is used to prevent the default behavior of the form, which is to submit the form and validate conditions on the form.
 * Last Updated: Nov 20, 2022
 * @author: Kei Kishimoto
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