let login_form = document.getElementById("login_form");
let signup_form = document.getElementById("signup_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email_address = document.getElementById("email_address");
let password = document.getElementById("password");

/**
 * DOCU This function shows error if the field is invalid
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
*/
function showError(input){
    let form_group = input;
    form_group.className = "error";
}

/**
 * DOCU This function shows success if the field is valid
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
*/
function showSuccess(input){
    let form_group = input;
    form_group.className = "success";
}

/**
 * DOCU This function validates the email entered by the user
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
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
 * DOCU This function validates the field entered by the user to make sure it is not empty.
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
*/
function checkValidation(input_arr){
    input_arr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `${getField(input)} is required!`);
        }else{
            showSuccess(input);
        }
    });
}

/**
 * DOCU This function validates the field entered by the user to make sure it is not empty and meets all the required characters.
 * Last Updated: December 28, 2022
 * @param input, min, max
 * @author Kei
*/
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getField(input)} must at least be ${min} characters!`);
    }else if(input.value.length > max){
        showError(input, `${getField(input)} must be less than ${max} characters!`);
    }else{
        showSuccess(input);
    }
}

/**
 * DOCU This function gets all the field name and returns its value.
 * Last Updated: December 28, 2022
 * @param input
 * @author Kei
*/
function getField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}