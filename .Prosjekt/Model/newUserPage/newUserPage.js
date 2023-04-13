//VIEW

//byttSide(newUserPage);
function newUserPage() {
  //let pissName = model.inputs.newUserPage.firstname;
  //let JævligPåRiktig = IlleBraDetSeMarlene;
  
  let html = /*html*/ `
<h2>Legg til ny bruker</h2>

<div class="newUserPageBox">
<b>Fornavn</b><input onchange="model.inputs.newUserPage.firstname = this.value" type="text">
<b>Etternavn</b><input onchange="model.inputs.newUserPage.lastname = this.value" type="text">
<b>Telefon</b><input onchange="model.inputs.newUserPage.phoneNumber = this.value" type="tel">
<b>Postnr</b><input onchange="model.inputs.newUserPage.postalCode = this.value" type="text">
<b>E-post</b><input onchange="model.inputs.newUserPage.eMail = this.value" type="email">
<b>Klasse</b><input onchange="model.inputs.newUserPage.klasse = this.value" type="text">
</div>

<img class="newUserPagePicture" src="" alt="">
<div class="newUserPageButtons">
<button onclick="lagreBruker()">Lagre</button>
<button onclick="velgBilde()">Velg bilde</button>
</div>
`;

return html;
}


//CONTROLLER
function lagreBruker(){
    model.users.push(model.inputs.newUserPage)
}

/* function lagreBruker(){
  når noen trykker på lagre, så skal all informasjonen til brukeren + bilde? legges til i model.users og få en id...?
} */

/* newUserPage: {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    postalCode: "",
    eMail: "",
    klasse: "", //Start IT, Get IT
    img: {
      imgSrc: "",
      imgName: "",
    } */
