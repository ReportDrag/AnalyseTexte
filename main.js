let txt ="";
letNbmot = 0;

function analyser(){

    txt = document.querySelector(".texte").value;

    let resultat = document.createElement('div');
    resultat.innerHTML = "Longueur du texte : " + txt.length + " caractère(s)";
    document.querySelector(".resultat").appendChild(resultat);
}