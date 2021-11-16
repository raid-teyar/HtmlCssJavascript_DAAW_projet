
var email = document.getElementById('email');
var password = document.getElementById('pass');
var submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    if (Validate(email.value) & password.value != '') {
        
        window.alert("Logging successed!");
        window.location.href = 'accueil.html';
        
    } else {
        window.alert("Please enter a valid email and password");
    }
});

function Validate(value) {
    //using regex expretion for validation
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

