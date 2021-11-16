//declaring functions to store info in local storage as JSON since local storage doesnt support storing arrays
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


var userInfo = localStorage.getObj("userInfo");
var infoElements = document.getElementsByClassName("info");
for (let i = 0; i < infoElements.length; i++) {
    infoElements[i].innerHTML = userInfo[i];
}

var supprimer_utilisateur_form = '<h2 style="color: brown;">Supprimer utilisateur:</h2>\
<p style="text-align: center; margin-top: 150px;">Êtes-vous sûr de vouloir supprimer cet utilisateur ? </p>\
<div  class="container">\
   <button id="button"   >Oui</button>\
   <button id="button2"   >Non</button>\
</div>';

var modifier_utilisateur_form = '<h2>Ajouter utilisateur:</h2>\
<form  action="accueil.html" class="container">\
    <label><b>Nom:</b></label>\
    <input class="inputs" value="Raid"  type="text">\
    <label><b>Prenom:</b></label>\
    <input class="inputs" value="Teyar" type="text">\
    <label><b>Faculte:</b></label>\
    <input class="inputs" value="NTIC" type="text">\
    <label><b>Groupe:</b></label>\
    <input class="inputs" value="G4" type="text" id="pass" >\
    <label><b>Adresse:</b></label>\
    <input class="inputs" value="Cite Benlardjem Alarbi, Bat 4,port 335" type="text">\
    <label><b>Email:</b></label>\
    <input class="inputs" value="rd07gamer@gmail.com" type="text">\
    <label><b>Telephone:</b></label>\
    <input class="inputs" value="+213559747280" type="text">\
    <button type="submit" id="button"  id="submit">Modifier</button>\
</form>';

var ajouter_utilisateur_form = '<h2>Ajouter utilisateur:</h2>\
<form  action="accueil.html" class="container">\
    <label><b>Nom:</b></label>\
    <input class="inputs"  type="text">\
    <label><b>Prenom:</b></label>\
    <input class="inputs" type="text">\
    <label><b>Faculte:</b></label>\
    <input class="inputs" type="text">\
    <label><b>Groupe:</b></label>\
    <input class="inputs" type="text" id="pass" >\
    <label><b>Adresse:</b></label>\
    <input class="inputs" type="text">\
    <label><b>Email:</b></label>\
    <input class="inputs" type="text">\
    <label><b>Telephone:</b></label>\
    <input class="inputs" type="text">\
    <button type="submit" id="button"  id="submit">Ajouter</button>\
</form>';

var list_des_utilisateurs = '<h2>Liste des utilisateurs:</h2>\
<table class="tftable" border="1">\
<tr><th>Id</th><th>Nom</th><th>Prenom</th></tr>\
<tr><td>0</td><td>Teyar</td><td>Raid</td></tr>\
<tr><td>1</td><td>Boudaoud</td><td>Aziz</td></tr>\
<tr><td>2</td><td>Boukahil</td><td>Khalil</td></tr>\
<tr><td>3</td><td>Mrabet</td><td>Wassim</td></tr>\
<tr><td>4</td><td>Merhoum</td><td>Mouhammed</td></tr>\
<tr><td>5</td><td>Zaimech</td><td>Bourhan</td></tr>\
<tr><td>6</td><td>Bouterfas</td><td>Abdou</td></tr>\
<tr><td>7</td><td>Chikhi</td><td>Hamza</td></tr>\
</table>';

let listBtn = document.getElementById('listBtn');
let addBtn = document.getElementById('addBtn');
let modifyBtn = document.getElementById('modifyBtn');
let deleteBtn = document.getElementById('deleteBtn');
var article = document.getElementById('article');


listBtn.addEventListener('click', function () {
    article.innerHTML = list_des_utilisateurs;
});

addBtn.addEventListener('click', function () {
    article.innerHTML = ajouter_utilisateur_form;
});

modifyBtn.addEventListener('click', function () {
    article.innerHTML = modifier_utilisateur_form;
});

deleteBtn.addEventListener('click', function () {
    article.innerHTML = supprimer_utilisateur_form;
    var btn1 =  document.getElementById('button');
    var btn2 =  document.getElementById('button2');
   
});


btn1.addEventListener('click',reloadPage());
btn2.addEventListener('click',reloadPage());

function reloadPage() {
    location.reload();
}