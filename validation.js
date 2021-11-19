
var email = document.getElementById('email');
var password = document.getElementById('pass');
var submit = document.getElementById('submit');
var user = [];

submit.addEventListener("click", () => {
    if (Validate(email.value) & password.value != '') {
        user[0] = email.value;
        user[1] = password.value;
        window.alert("Logging successed!");
        window.location.href = 'accueil.html';
        localStorage.setObj("userInfo", user);
        
    } else {
        window.alert("Please enter a valid email and password");
    }
});

function Validate(value) {
    //using regex expretion for validation
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

//declaring functions to store info in local storage as JSON since local storage support only strings and not arrays
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
