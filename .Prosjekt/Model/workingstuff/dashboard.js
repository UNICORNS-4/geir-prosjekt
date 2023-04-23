function updateDashboard() {
  console.log("#DASH_UPDATED");
  let html = /*HTML*/ `
    <div class="navBar dashboard">
        <div class="navBarItem" onclick="byttSide('frontPage')">Hjem</div>
        <div class="navBarItem">Temaer</div>
        <div class="navBarItem">Meldinger</div>
        <div class="navBarItem" onclick="byttSide ('profilePage')">Min Side</div>
        <div>
          <div class="navBarUser">${model.app.loggedInUser.firstname} ${model.app.loggedInUser.lastname}</div>
          <div class="navBarUserClassID">${model.app.loggedInUser.klasse}</div>
        </div>
        <div class="navBarItem logOutBtn" onclick="logOut()">Log ut</div>
    </div>
    <button onclick="byttSide('loginPage')">Login Page</button>
    <button onclick="byttSide('logPage')">Logg Page</button>
    <button onclick="byttSide('newUserPage')">Ny bruker</button>
    <button onclick="byttSide('profilePage')">Min Side</button>
    `;
  return html;
}

function findUser(userID) {
  for (let user of model.users) {
    if (user.userId == userID) {
      return user;
    }
  }
  return "";
}
function logOut() {
  model.app.loggedInUser = false;
  updateViewLoginPage(); // skal endres til currentPage i ferdig produkt.
}
