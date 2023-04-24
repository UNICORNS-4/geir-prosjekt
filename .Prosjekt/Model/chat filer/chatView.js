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
  if(model.chatMessages.isRead == true){
  let filterMld = model.chatMessages.filter(model.chatMessages.isRead == 'true').map(model.chatMessages >= model.chatMessages.isRead)
  console.log(filterMld)
}else{
  model.chatMessages.isRead == false
}
  updateChatView()
}


















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