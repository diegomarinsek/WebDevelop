let voto = document.getElementById("voto");
let bottone = document.getElementById("b1");
let testo = document.getElementById("testo");

bottone.addEventListener("click",calcola);


function calcola(){
    if(voto>6){
        testo.textContent = "promosso";
    }else{
        testo.textContent = "bocciato";
    }

}