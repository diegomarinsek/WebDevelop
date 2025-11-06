// DOM gestisce
// con un input l'inserimento nella lista dei voti

const grades = []

// 1) prendere tag html dal DOM
let btn = document.getElementById("calc")
let res = document.getElementById("res")
let addBtn = document.getElementById("addValue")
let usIn = document.getElementById("userIn")

usIn.addBtn.addEventListener("click", () => {

    
    grades.push(Number(usIn.value))
    usIn.value = "" // pulisco il campo input dopo l'inserimento
})

btn.addEventListener("click", () => {
    const numberOfGrades = grades.length
    let gradeSum = 0

    // sommo tutti i voti
    for (let i = 0; i < numberOfGrades; i++) {
        gradeSum += grades[i]
    }

    // calcolo la media
    const average = gradeSum / numberOfGrades

    // mostro il risultato
    res.textContent = `Media: ${average.toFixed(2)} - `

    if (average >= 6) {
        res.textContent += "Promosso! 🎉"
    } else {
        res.textContent += "Bocciato 😞"
    }
})
