let login_form = document.getElementById("login_form");
let signup_form = document.getElementById("signup_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email_address = document.getElementById("email_address");
let password = document.getElementById("password");


/**
 * DOCU: This function shows error handling if the field is not validated
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function showError(input){
    let form_group = input;
    form_group.className = "error";
}

/**
 * DOCU: This function shows success handling if the field is validated
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function showSuccess(input){
    let form_group = input;
    form_group.className = "success";
}

/**
 * DOCU: This function validates the email input
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
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
 * DOCU: This function checks if the field is not empty
 * Last Updated: Nov 21, 2022
 * @param input_arr - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function checkValidation(input_arr){
    input_arr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getField(input)} is required!`)
        }else{
            showSuccess(input);
        }
    });
}

/**
 * DOCU: This function validates the maximum and minimum length of the input
 * Last Updated: Nov 21, 2022
 * @param input - event object
 * @param min - minimum length
 * @param max - maximum length
 * @author Kei Kishimoto
 */
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getField(input)} must at least ${min} characters!`);
    }else if(input.value.length > max){
        showError(input, `${getField(input)} must be less than ${max} characters!`);
    }else{
        showSuccess(input);
    }
}

/**
 * DOCU: This function gets the value of the input
 * Last Updated: Nov 21, 2022
 * @param input - The event object is a property of the Window object.
 * @author Kei Kishimoto
 */
function getField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}