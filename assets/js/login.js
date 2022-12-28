login_form.addEventListener("submit", function(e){
    e.preventDefault();

    if(email_address != 0 && password.value >= 6){
        window.location.href = "../timeline/wall.html";
    }else{
        validate();
    }
});

function validate(){
    checkLength(password, 6, 25);
    checkEmail(email_address);
}