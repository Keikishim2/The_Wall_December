let login_form = document.getElementById("login_form");
let signup_form = document.getElementById("signup_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email_address = document.getElementById("email_address");
let password = document.getElementById("password");

/**
 * DOCU: This function is used to show error handling for the form validation.
 * Last Updated: Nov 20, 2022
 * @param input - The input element that is being validated.
 * @param message - The error message to display.
 * @author Kei Kishimoto
 */
function showError(input){
    let form_group = input;
    form_group.className = "error";
}

/**
 * DOCU: This function is used to show success handling when there is no error found in form validation.
 * Last Updated: Nov 20, 2022
 * @param input - The input element that is being validated.
 * @author Kei Kishimoto
*/
function showSuccess(input){
    let form_group = input;
    form_group.className = "success";
}

/**
 * DOCU: This function is used to check if the input is valid email address
 * Last Updated: Nov 20, 2022
 * @param input - The input field that the user is typing in.
 * @author Kei Kishimoto
 */
function checkEmail(input){
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input);
    }
}

/**
 * DOCU: This function is used to take an array of inputs, loops through each input, and checks if the value of the input is empty. If it is, it shows an error message.
 * Last Updated: Nov 20, 2022
 * @param input_arr - an array of input elements
 * @author Kei Kishimoto
 */
function checkValidation(input_arr) {
    input_arr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getField(input)} is required`)
        }else {
            showSuccess(input);
        }
    });
  }

/**
 * DOCU: The function checks the length of the input and if it's less than the minimum or greater than the maximum, it shows an error.
 * Last Updated: Nov 20, 2022
 * @param input - the input field to be checked
 * @param min - minimum length of the input
 * @param max - maximum number of characters allowed in the input field
 * @author Kei Kishimoto
 */
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getField(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getField(input)} must  be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

/**
 * DOCU: This function is used to take a string, capitalizes the first letter, and returns the string.
 * Last Updated: Nov 20, 2022
 * @param input - The input element that was changed
 * @returns The first character of the id property of the input parameter, capitalized, followed by the rest of the id property.
 * @author Kei Kishimnoto
 */
function getField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


