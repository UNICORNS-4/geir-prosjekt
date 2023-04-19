function updateViewTopic1(){
    let html = /*html*/ `
   <h2>Tema 1: Trygghet</h2>
    <div>
        <div>${model.oppgaver.Tittel}</div>
        <div>Informasjon/video/linker til trygghet</div>
    </div>
    <div>
        <div>Oppg 1: Hva er trygghet?</div>
        <div>Hvilke påstander er riktig om psykologisk trygghet? (Flere svaralternativ mulig)
            <div>
            <input id="t1s1" type="checkbox">
            <label for="t1s1">Det handler om hvordan man fremstår ovenfor andre</label>
            <input id="t1s2" type="checkbox">
            <label for="t1s2">Det handler om hvordan man fremstår ovenfor andre</label>
            <input id="t1s3" type="checkbox">
            <label for="t1s3">Det handler om hvordan man fremstår ovenfor andre</label>
            <input id="t1s4" type="checkbox">
            <label for="t1s4">Det handler om hvordan man fremstår ovenfor andre</label>
            </div>
        </div>
    <div>
        <div>Oppg 2: Hvorfor er trygghet viktig?</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit modi eum totam at molestiae minima harum. Quasi hic quas fugit odit quae repellendus similique libero magni quis dicta, placeat nostrum?</div>

    </div>
    <div>
        <div>Oppg 3: Refleksjonsoppgave</div>
        <div>Hva er dine tanker etter å ha jobbet med emnet?</div>
        <div>Fyll ut ditt svar her:
            <textarea name="refleksjonsOppgaveTema1" id="refleksjonsOppgaveTema1" cols="30" rows="10"></textarea>
        </div>
    </div>
    </div>

   `;
   return html;
};
