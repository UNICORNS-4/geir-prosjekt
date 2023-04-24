function updateChatView(){
  let html = "";
  for (let i = 0; i < model.users.length; i++) {
    html += /*HTML*/ `
    <div>Ulest:
      <ul onclick="openChat(${model.chatMessages.isRead})">
        ${model.users[i].firstname} ${model.users[i].lastname}
      </ul>
    </div>
  `;
  }
  return html;
}

function openChat(){
  function openChat(){
if(model.chatMessages.isRead == true){
let filterMld = model.chatMessages.filter(model.chatMessages.isRead == 'true').map(model.chatMessages >= model.chatMessages.isRead)
console.log(filterMld)
}else{
model.chatMessages.isRead == false
}
updateChatView()
}
}







// MARIE SIN MÅTE Å FILTRERE PÅ!!!!!!!!!

// TING JEG FANT PÅ NETTET!!!!!!!!!!
/*
const array = [{ stuff }, { moreStuff }, ...]

const array = [{ good }, null, { great }, undefined]

const newArray = array.map(item => {
  // Of course this will work, wheeee...
  const assumption = item.thing
})
// Oh noooo...
🚨 Cannot read property "thing" of undefined. 🚨
🚨 Cannot read property "thing" of null. 🚨

const newArray = array.map(item => {
  // Life has made me cautious.
  if (!item) {
    return item // Just forget it
  }
  // If we get this far, item exists.
  const assumption = item.thing

  const array = [{ good }, null, { great }, undefined]

const truthyArray = array.filter(Boolean)
// truthyArray = [{ good }, { great }]

array.filter(item => Boolean(item))

array.filter(Boolean)

const newArray = array.filter(Boolean).map(item => {
  // Item is always truthy!
  const assumption = item.thing
})
})



//EN ANNEN TING JEG FANT PÅ NETTET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let wizardsWithStaffs = [];
for (let wizard of wizards) {
	if (wizard.tool !== 'staff') continue;
	wizardsWithStaffs.push(wizard);
}

wizards.forEach(function (wizard) {
	if (wizard.tool !== 'staff') return;
	wizardsWithStaffs.push(wizard);
});

let wizardsWithStaffs = wizards.filter(function (wizard) {
	return wizard.tool === 'staff';
});
*/




















// function åpneChat(){
//   let html = "";
//   for (let i = 0; i < model.chatMessages.messageContent.length; i++)
//     html += /*html*/ `
//     <div>${model.chatMessages[i].fromUserId}</div>
//     `;
  
//     if (model.chatMessages.isRead = true){
//       let html = "";
//       html += /*html*/`
//       <div id="ulest">Lest:</div>
//       `
//     }else{
//       let html = "";
//     }
//     updateChatView();
      
// }

//ulest sin tekst settes til lest
//åpner meldingsboks, pluss setter feltet med innkommende mld til lest status/endrer CSS til annen farge