function updateDashboard(){
    let html = /*HTML*/`
    <div class="navBar dashboard">
        <div class="navBarItem">Hjem</div>
        <div class="navBarItem">Temaer</div>
        <div class="navBarItem">Meldinger</div>
        <div>
          <div class="navBarUser">${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</div>
          <div class="navBarUserClassID">${findUser(model.app.loggedInUser).klasse}</div>
        </div>
    </div>
    <button onclick="updateViewLoginPage()">Login Page</button>
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