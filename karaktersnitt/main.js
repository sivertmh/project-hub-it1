// definerer alle globale variabler som trengs til programmet
const karakterForm = document.querySelector("#karakter-form")
const thisSemester = document.querySelector("#this-semester")
const tidligereStandpunkt = document.querySelector("#tidligere-standpunkt")
const submitBtn = document.querySelector("#submit-btn")
const snittOutput = document.querySelector("#snitt-output");
var karakterer = document.forms[0];
let karakterArray = [];
let totalChecked

// alle karakterer fra dette semesteret (9 stk)
const thisSemesterArray = [
    ["Norsk Muntlig", "norsk-muntlig"],
    ["Driftstøtte", "driftstoette"],
    ["Naturfag", "naturfag"],
    ["Informasjonsteknologi 1", "it1"],
    ["Matematikk R1", "matte-r1"],
    ["Kroppsøving", "kroppsoeving"],
    ["Norsk Skriftlig", "norsk-skriftlig"],
    ["Brukerstøtte", "brukerstoette"],
    ["Utvikling", "utvikling"]
];

// standpunkts-karakterer fra andre semestere (6 stk)
const tidligereStandpunktArray = [
    ["Engelsk", "engelsk"],
    ["Yrkesfaglig Fordypning", "yff"],
    ["Konseptutvikling og Programmering", "kon-prog"],
    ["Produksjon og Historiefortelling", "prod-his"],
    ["Teknologiforståelse", "tekforstaaelse"],
    ["Matematikk 1T", "matte1t"]
];

function karakterKalk(numStringArray) {
    // metode ved bruk av reduce for å ta sum av tall i array.
    // Akkurat denne linjen er hentet fra Geeksforgeeks (sjekk kilder i readme).
    // bruker accumulator og index-et i iterasjonen.
    let karakterSum = numStringArray.reduce((acc, x) => acc + x, 0);

    // totalChecked viser pga dette riktig info.
    // legger til 1 for hver checked radio-knapp.
    for (i = 0; i < karakterer.length; i++) {
        if (karakterer[i].checked) {
            totalChecked += 1;
        }
    }

    // bruker concat for å sette sammen arrays, så tar den lengden
    // formel for gjennomsnitt
    let karakterSnitt = karakterSum / totalChecked;

    return karakterSnitt;
}

// oppretting av hele form untatt to forhåndslagde fieldsets
function genForm(arrayName, DomName) {
    arrayName.forEach(([displayName, codeName]) => {
        const fieldset = document.createElement("fieldset");

        const legend = document.createElement("legend");
        legend.textContent = displayName;

        DomName.appendChild(fieldset);
        fieldset.appendChild(legend);

        // loop som lager seks knapper med tallene 1-6.
        // først en input, så en label som hører til (for å vise tallet til brukeren).
        for (let i = 1; i <= 6; i++) {
            const input = document.createElement("input");
            input.type = "radio";
            input.id = codeName + i;
            input.name = codeName;
            input.value = i;

            const label = document.createElement("label");
            label.textContent = i;
            label.htmlFor = codeName + i;

            fieldset.appendChild(input);
            fieldset.appendChild(label);
        }
    })
}

// brukes til når knapp på form trykkes.
// pusher de avkryssede verdier til arrayet "karakterArray"
function arrayAppendKarakter() {
    // resetter hentet form-data
    totalChecked = 0;

    for (let i = 0; i < karakterer.length; i++) {
        if (karakterer[i].checked) {
            karakterArray.push(karakterer[i].value);
        }
    }
}

submitBtn.addEventListener("click", (x) => {
    x.preventDefault();

    karakterArray = []; // resetter arrayet
    arrayAppendKarakter();

    let karakterArrayTall = karakterArray.map(Number);

    snittOutput.textContent = karakterKalk(karakterArrayTall).toFixed(2);
})

// kaller funksjonen to ganger, én gang for hver av de to array-ene og fieldset-ene.
genForm(thisSemesterArray, thisSemester);
genForm(tidligereStandpunktArray, tidligereStandpunkt);
