updateChatView();
function updateChatView(){
  let html = "";
console.log(model.users)
  for (let i = 0; i < model.users.length; i++) {
    
    //finn alle meldinger som skal til den innlogga brukern
    let chatMessage = model.chatMessages.find(msg => msg.toUserId == model.users[i].userId);
    if (chatMessage == null || undefined) continue;
    console.log(chatMessage)

    html += /*HTML*/ `
    <div>Mld
    <ul onclick="openChat(${chatMessage.chatId})">
        ${chatMessage.isRead ? "Lest" : "Ulest"}:
        ${model.users[i].firstname} ${model.users[i].lastname}
      </ul>
    </div>
    `;
  };
  console.log(html)
  return html;
}

function openChat(chatMessage){
  let filterMld = model.chatMessages.filter(x => x.chatId == chatMessage)
  filterMld.isRead = !filterMld.isRead;
  updateView();
  //let filterMld = model.chatMessages[0].isRead.filter(lest => model.chatMessages[0].isRead == true)
}


// function openChat(){
//   if(model.chatMessages.isRead == true){
//   console.log(filterMld)
//   }else{
//   model.chatMessages.isRead == false
//   } 
//   updateChatView()
// }








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