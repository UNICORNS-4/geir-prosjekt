function updateViewFrontPage() {
  let html = "";
  html =
    /*html*/
    `
    <div id="frontPageBackground"><img id="frontpageIMG" src="img/level${findProg()}.png"></div>
    `;
  return html;
}

/* når en student er logget inn
vis bilde som tilhører fremgangen til
den aktuelle studenten */
