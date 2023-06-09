//VIEW

//byttSide(newUserPage);
function updateViewNewUserPage() {
  //let pissName = model.inputs.newUserPage.firstname;
  //let JævligPåRiktig = IlleBraDetSeMarlene;

  let html = /*html*/ `
  <div class="newUserPageBox">
  <h2>Legg til ny bruker</h2>

  <b>Bukernavn</b> <input onchange="model.inputs.newUserPage.userId = this.value" type="text"><br>
<b>Fornavn</b> <input onchange="model.inputs.newUserPage.firstname = this.value" type="text"><br>
<b>Etternavn</b><input onchange="model.inputs.newUserPage.lastname = this.value" type="text"><br>
<b>Telefon</b><input onchange="model.inputs.newUserPage.phoneNumber = this.value" type="tel"><br>
<b>Postnr</b><input onchange="model.inputs.newUserPage.postalCode = this.value" type="text"><br>
<b>E-post</b><input onchange="model.inputs.newUserPage.eMail = this.value" type="email"><br>
<b>Klasse</b><input onchange="model.inputs.newUserPage.klasse = this.value" type="text"><br>
<b>Passord</b><input onchange="model.inputs.newUserPage.password = this.value" type="text"><br>
<button onclick="lagreBruker()">Lagre</button>

<img class="newUserPagePicture" src="" alt="">
<div class="newUserPageButtons">
<!-- <button onclick="lagreBruker()">Lagre</button>
<button onclick="velgBilde()">Velg bilde</button> -->

        </div>
`;
  return html;
}

//CONTROLLER
function lagreBruker() {
  model.users.push(model.inputs.newUserPage);
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
