
function updateChatView(){
    let html = "";
    for (let i = 0; i < model.users.length; i++) {
      html += /*HTML*/ `
    <div id="ulest">Ulest Fra:
    <ul onclick="åpneChat(${i})">
        ${model.users[i].firstname} ${model.users[i].lastname}
    </div>
    </ul>
    <div></div>
    `;
    }
    return html;
  }

    if (model.chatMessages.isRead = true){
      let html = "";
      html += /*html*/`
      <div id="ulest">Lest:</div>
      `
    }else{
      let html = "";
    }
    updateChatView();
        //ulest sin tekst settes til lest












/* const model = {
    app: {
      currentPage: "chatPage",
      isAdmin: true,
      loggedInUser: false,
    }, */
    /* chatPage: {
        newMessageInput: "", */
        /* chatMessages: [
            {
              fromUserId: "terje",
              toUserId: "per",
              messageContent: "Hallo, hva er psykologisk trygghet?",
              timeStamp: "2023-03-31 15:03", // t = '2023-03-31 15:03'; new Date(t)    .toLocaleTimeString()
              isRead: false,
            },
          ], */