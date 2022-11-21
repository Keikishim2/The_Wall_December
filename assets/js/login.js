/**
 * DOCU: This function validates the form before redirecting to the wall.html
 * Last Updated: Nov 21, 2022
 * @author Kei Kishimoto
 */
login_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(email_address.value != 0 && password.value >= 6){
        window.location.href = "../timeline/wall.html";
    }else{
        validate();
    }
});

/**
 * DOCU: This function validates the form for the login page
 * Last Updated: Nov 21, 2022
 * @author Kei Kishimoto
 */
function validate(){
    checkLength(password, 6, 25);
    checkEmail(email_address);
}