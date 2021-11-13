
var inputs = document.getElementsByClassName('inputs')
var submit = document.getElementById('submit');
var pass;
submit.addEventListener("click", () => {
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