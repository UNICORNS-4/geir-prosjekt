const app=document.getElementById("app");




function updateView(){
    switch(model.app.currentPage){
        case"frontPage":
            app.innerHTML= updateDashboard();
            break;
        case"loginPage":
            app.innerHTML= updateViewLoginPage();
            break;
        case"logPage":
            app.innerHTML= updateViewLogPage();
            break;
        case"profilePage":
            app.innerHTML= updateProfilepageView();
            break;
        case"newUserPage":
            app.innerHTML= updateViewNewUserPage();
            break;
    }
}
window.onload = updateView();