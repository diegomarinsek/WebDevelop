let bottone = document.getElementById("bottone");
let testo = document.getElementById("testo");
function saluta(){
    testo.textContent= "Ciao Studente!";
}
bottone.addEventListener("click",saluta);
