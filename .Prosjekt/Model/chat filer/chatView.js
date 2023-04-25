updateChatView();
function updateChatView(){
  let html = "";
  for (let i = 0; i < model.users.length; i++) {
    
    //finn alle meldinger som skal til den innlogga brukern
    let chatMessage = model.chatMessages.find(msg => msg.toUserId == model.users[i].userId);
    if (chatMessage == null || undefined) continue;

    html += /*HTML*/ `
    <div>Chatter fra:
    <ul onclick="openChat(${i})">
        ${chatMessage.isRead ? "Lest" : "Ulest"}:
        ${model.users[i].firstname} ${model.users[i].lastname}
      </ul>
    </div>
    `;
  };
  return html;
}

function openChat(index){
  let chatMessage = model.chatMessages.find(msg => msg.toUserId == model.users[index].userId);
  chatMessage.isRead = !chatMessage.isRead;
  updateView();
}


function chatBox(){
  let html = "";
  html += /*HTML*/ `
  <div>Chat mellom deg og ${model.users[i].firstname} ${model.users[i].lastname}
    <textarea cols="30" rows="10"></textarea>
    <button onclick="sendMld()">Send</button>
    </div>
    `;
}

function sendMld(){
  
  model.users.push(model.inputs.newUserPage)
}

  
  