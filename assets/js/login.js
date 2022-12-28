/**
 * DOCU This function validates the login form, once success, it will redirect to the main wall page
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
*/
login_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(email_address != 0 && password.value >= 6){
        window.location.href = "../timeline/wall.html";
    }else{
        validate();
    }
});

/**
 * DOCU This function validates the email and password entered in the page
 * Last Updated: December 28, 2022
 * @param event
 * @author Kei
*/
function validate(){
    checkLength(password, 6, 25);
    checkEmail(email_address);
}