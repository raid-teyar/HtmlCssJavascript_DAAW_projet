var inputs = document.getElementsByClassName('inputs')
var submit = document.getElementById('submit');
var pass;

//user info
var user = [];

submit.addEventListener("click", () => {

    //adding user data to the user array
    for (let i = 0; i < inputs.length; i++) {
        user[i] = inputs[i].value;
    }
    
    ValidateAll(inputs);
    if (pass) {
        window.alert("le compte a ete cree avec succes!");
        window.location.href = '/accueil.html';
    } else {
        window.alert("Please Fill all fields...");
    }
});

function ValidateAll(_array) {
    for (let i = 0; i < _array.length; i++) {
        if (_array[i].value === "") {
            pass = false;
        }else{
            pass = true;
        }
    }
}