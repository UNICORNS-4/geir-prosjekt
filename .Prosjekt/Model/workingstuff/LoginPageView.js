function updateViewLoginPage() {
    model.app.loggedInUser = false;
    console.log('model.app.loggedInUser = False')
    model.inputs.loginPage.userId = "";
    model.inputs.loginPage.password = "";
    console.log("#loginPageView_UPDATED")
    return /*HTML*/ `
<div id ="loginPageView"> 
        <input 
        class="loginPageInputs" 

            placeholder="brukernavn"
            type="text" 
            value="${model.inputs.loginPage.userId || ""}"
            oninput="model.inputs.loginPage.userId = this.value"
            /><br/>


        <input 
            placeholder="passord"
            class="loginPageInputs" 
            type="password" 
            value="${model.inputs.loginPage.password || ""}"
            oninput="model.inputs.loginPage.password = this.value"
            /><br/>


        <div style="color:red">
            ${model.inputs.loginPage.errorMessage || ""}
        </div>
        <button class="loginPageBtns" onclick="logIn()">Logg inn</button>
`;
}
