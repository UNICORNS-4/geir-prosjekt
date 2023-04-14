function updateDashboard(){
    let html = /*HTML*/`
    <div class="navBar dashboard">
        <div class="navBarItem">Hjem</div>
        <div class="navBarItem">Temaer</div>
        <div class="navBarItem">Meldinger</div>
        <div class="navBarUser">${model.app.loggedInUser}</div>
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