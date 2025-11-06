let bottone = document.getElementById("b1");
let n1 = document.getElementById("n1");
let testo = document.getElementById("text");

function calcola(){
    let confronto= Number(n1.value) % 2; 
    testo.textContent = confronto;
   if (confronto == 0){
        testo.textContent = "pari";
   }else {
        testo.textContent = "dispari";
   }
    
}
bottone.addEventListener("click",calcola);