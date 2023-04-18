function updateDashboard(){
    let html = /*HTML*/`
    <div class="navBar dashboard">
        <div class="navBarItem">Hjem</div>
        <div class="navBarItem">Temaer</div>
        <div class="navBarItem">Meldinger</div>
        <div>
          <div class="navBarUser">${model.app.loggedInUser.firstname} ${model.app.loggedInUser.lastname}</div>
          <div class="navBarUserClassID">${model.app.loggedInUser.klasse}</div>
        </div>
    <div class="navBarItem" onclick="logOut()">Logg ut</div>
    </div>
    `;
return html;
}

function findUser(userID) {
    for (let user of model.users) {
      if (user.userId == userID) {
        return user;
      }
    }
    return null;
  }
  
function logOut () {
model.app.loggedInUser = [];
updateViewLoginPage(); // skal endres til currentPage i ferdig produkt.
}