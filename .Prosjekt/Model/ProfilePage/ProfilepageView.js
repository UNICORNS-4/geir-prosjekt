
document.getElementById('app').innerHTML = updateProfilepageView();

function updateProfilepageView() {
  let html = /* Html */ `
  <div id="ProfilePic" ><img id="img1" style="width:150px" src="img/img1.jpeg"></div>
  <div id="ProfileName">@SuperStudent</div>
  <div id="StartIT">START IT</div>
  <div id="Progressbars"></div>
  <div id="Bars">${updateBars()}</div>
  <button id="homepage">Home</button>
  `;
  return html;
}

function updateBars(){
  let html = `
  <label for="bar1">Tema 1:</label>
  <progress id = "bar1" value="23" max="100"></progress>
  <label for="bar2">Tema 2:</label>
  <progress id = "bar2" value="12" max="100"></progress>
  <label for="bar3">Tema 3:</label>
  <progress id = "bar3" value="96" max="100"></progress>
`
  return html;
}

function updateBar1(){
  

}




