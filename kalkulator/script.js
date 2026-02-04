// de fire under henter DOM-elementer fra HTML
// henter alle buttons i div med css-klassen .calc-container
const calcBtns = document.querySelectorAll(".btns button");
// henter elementet som viser resultat av regning
const output = document.getElementById("output");
// henter C-knappen (knapp som skal tømme outputfelt)
const clearBtn = document.getElementById("clear");

function clearVal() {
    calcBtnEl.addEventListener("click", () => {
        output.value = "";
})
}

// skal legge til symbol i output-feltet basert på textinnhold i knapp.
for (let i = 0; i < calcBtns.length; i++) {
    const calcBtnEl = calcBtns[i];

    if (calcBtnEl.innerText == "C") {
        // tømmer output-feltets value
        calcBtnEl.addEventListener("click", () => {
            output.value = "";
        })
    } else if (calcBtnEl.innerText == "=") {
        // gjør om output-feltets value til utregnet verdi
        calcBtnEl.addEventListener("click", () => {
            output.value = eval(output.value);
        })
    } else if (calcBtnEl.innerText == "D") {
        // Bruker slice-metode til å hente ut alle "bokstavene" unntatt den siste ved klikk.
        calcBtnEl.addEventListener("click", () => {
            output.value = output.value.slice(0, output.value.length - 1);
        })
    } else {
        // legger til verdi av trykket knapp til feltets value
        calcBtnEl.addEventListener("click", () => {
            output.value += calcBtns[i].innerText;
        })
    }
}

