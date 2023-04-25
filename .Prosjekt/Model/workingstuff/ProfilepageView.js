let Progressbar1 = 0;
let Progressbar2 = 0;
let Progressbar3 = 0;

function updateProfilepageView() {
  return /* Html */ `
  <div id="ProfilePic" ><img id="img1" style="width:150px" src="img/${model.app.loggedInUser.imgSrc}"></div>
  <div id="ProfileName">${model.app.loggedInUser.firstname} ${model.app.loggedInUser.lastname}</div>
  <div id="StartIT">${model.app.loggedInUser.klasse}</div>
  <div id="Progressbars"></div>
  <div id="Bars">${updateBars()}</div>
  `;
}


function updateBars() {
  let theme1progression =
    model.app.loggedInUser.utførteOppgaver /
    model.app.loggedInUser.oppgaver /
    100;

  let html = /* html */ `
  <div class="ProfilePage-ProgressBars">
    <label for="bar1">Tema 1: Trygghet </label>
    <progress id = "bar1" value="4" max="4"></progress>

    <label for="bar2">Tema 2: Growth mindset</label>
    <progress id = "bar2" value="12" max="100"></progress>
    
    <label for="bar3">Tema 3: Mikrovaner</label>
    <progress id = "bar3" value="76" max="100"></progress>
  </div>
`;
  return html;
}
