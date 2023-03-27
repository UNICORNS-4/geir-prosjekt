function drawTrygghet (){
    for (let i = 0; i<trygghetModel.length; i++){
        if (trygghetModel[i].hasCheckmark == false){
            html += /*HTML*/`
            <div>${trygghetModel[i].Tittel}</div>
            `;
        }
        else {
            html += `
            <div>${trygghetModel[i].Tittel}</div>
            <input type="checkbox"></input>
            `;
        }
    }
}