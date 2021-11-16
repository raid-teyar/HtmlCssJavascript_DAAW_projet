var inputs = document.getElementsByClassName('inputs')
var submit = document.getElementById('submit');

var pass;

//user info
user = [];




function formOnSubmit() {
    
    

    //adding user data to the user array
    for (let i = 0; i < inputs.length; i++) {
        user[i] = inputs[i].value;
    }

    

    ValidateAll(inputs);


    if (pass) {
        localStorage.setObj("userInfo", user);
        window.alert("le compte a ete cree avec succes!");
        window.location.href = 'accueil.html';
    } else {
        window.alert("Please Fill all fields...");
    }
    
};

function ValidateAll(_array) {
    for (let i = 0; i < _array.length; i++) {
        if (_array[i].value === '') {
            pass = false;
            break;
        }else{
            pass = true;
        }
    }
}

//declaring functions to store info in local storage as JSON since local storage support only strings and not arrays
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
