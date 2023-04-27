let Progressbar1 = 0;
let Progressbar2 = 0;
let Progressbar3 = 0;

function updateProfilepageView() {
  if (findUser(model.app.loggedInUser).klasse === "Admin") {
  return /* Html */ `
  <div class="ProfilepageContainAll">
  <div id="ProfilePic" ><img id="img1" src="img/${findUser(model.app.loggedInUser).imgSrc}"></div>
  <div id="ProfileName"><b>${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</b></div>
  <div id="StartIT"><b>${findUser(model.app.loggedInUser).klasse}</b></div>
  </div>
  `;
  }
  else {
    return /* Html */ `
  <div class="ProfilepageContainAll">
  <div id="ProfilePic" ><img id="img1" src="img/${findUser(model.app.loggedInUser).imgSrc}"></div>
  <div id="ProfileName"><b>${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</b></div>
  <div id="StartIT"><b>${findUser(model.app.loggedInUser).klasse}</b></div>
  <div id="Progressbars"></div>
  <div id="Bars">${updateBars()}</div>
  </div>
  `;
  }
}


function updateBars() {
  let theme1progression =
    model.app.loggedInUser.utførteOppgaver /
    model.app.loggedInUser.oppgaver /
    100;
    
  let html = /* html */ `
  <div class="ProfilePage-ProgressBars">
    <label for="bar1">Tema 1: Trygghet</label>
    <progress id = "bar1" class="bars" value="4" max="4"></progress>
    
    <label for="bar2">Tema 2: Growth mindset</label>
    <progress id = "bar2" class="bars" value="75" max="100"></progress>
    
    <label for="bar3">Tema 3: Mikrovaner</label>
    <progress id = "bar3" class="bars" value="0" max="100"></progress>
  </div>
`
  return html;
}