
/**
 * DOCU: This function is used to check email and password. If success, it will redirect to wall.html page
 * Last Updated: Nov 18, 2022
 * @author: Kei Kishimoto
*/
login_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(email_address.value != 0 && password.value != 0){
        window.location.href = "../timeline/wall.html";
    }else{
        validate();
    }
});

/**
 * DOCU: This function calls the checkLength and checkEmail to pass the validation for the input
 * Last Updated: Nov 18, 2022
 * @author: Kei Kishimoto
 */
function validate(){
    checkLength(password, 6, 25);
    checkEmail(email_address);
}