// Vai a prendere dal DOM quell'elemento tramite id
let res = document.getElementById("res")
let input = document.getElementById("in")
let inBtn = document.getElementById("inBtn")
// console.log("CIAO");

inBtn.addEventListener("click", getInputAndAdd)

// Funzioni
function getInputAndAdd() {
    let inVal = Number(input.value)
    console.log(typeof inVal);
    console.log((inVal + 5));
    console.log(typeof (inVal + 5));

    res.textContent = inVal + ": " + (inVal + 5)
}
