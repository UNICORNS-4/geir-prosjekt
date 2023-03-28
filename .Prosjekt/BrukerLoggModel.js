const app = document.getElementById("app");

//Malle

//Seb

//Alex

brukerLoggView(); // Kallt på i tempView.js;
function brukerLoggView() {
  document.getElementById("app").innerHTML += /*html*/ `
  <div>Hei</div>`;
}

const ukeNr = [
  "Uke 1",
  "Uke 2",
  "Uke 3",
  "Uke 4",
  "Uke 5",
  "Uke 6",
  "Uke 7",
  "Uke 8",
];

const dager = [
"Mandag", 
"Tirsdag", 
"Onsdag", 
"Torsdag", 
"Fredag"
];

const elevLogg = {
  uker: 
  [
    {
      uke: ukeNr[0],
      dag: dager[0],
    },
  ],
};










function sammenslå{
for (let i; i < dager.length; i++) {
    let visdager = uker[i] + dager[i]
    return visdager

}
}