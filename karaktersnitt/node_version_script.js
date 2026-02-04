// Importerer modul som tillater input ved kjøring med node
const readline = require("readline-sync");
// Modul som kan gi farge på tekst
const chalk = require('chalk');

let karakterArray = [];

// alle karakterer fra dette semesteret (9 stk)
const foersteSemester = [
    ["Norsk Muntlig", "NOR1265"],
    ["Driftstøtte", "ITK2001"],
    ["Naturfag", "NAT1013"],
    ["Informasjonsteknologi 1", "REA3048"],
    ["Matematikk R1", "REA3056"],
    ["Kroppsøving", "KRO1018"],
    ["Norsk Skriftlig", "NOR1264"],
    ["Brukerstøtte", "ITK2002"],
    ["Utvikling", "ITK2003"]
];

// standpunkts-karakterer fra andre semestere (6 stk)
const tidligereStandpunkt = [
    ["Engelsk", "ENG1009"],
    ["Yrkesfaglig Fordypning", "YFF4102"],
    ["Konseptutvikling og Programmering", "IKM1003"],
    ["Produksjon og Historiefortelling", "IKM1001"],
    ["Teknologiforståelse", "IKM1002"],
    ["Matematikk 1T", "MAT1021"]
];

function karakterPrompt(skoleFag) {
    let karakter = readline.question(skoleFag + ": ")
    karakterArray.push(+karakter)
}

function karakterKalk() {
    // metode ved bruk av reduce for å ta sum av tall i array
    // Denne linjen er hentet fra Geeksforgeeks (sjekk kilder i readme)
    let karakterSum = karakterArray.reduce((acc, x) => acc + x, 0);
    // bruker concat for å sette sammen arrays, så tar den lengden
    let fagAntall = (foersteSemester.concat(tidligereStandpunkt)).length;
    // formel for gjennomsnitt
    let karakterSnitt = karakterSum / fagAntall;

    console.log(fagAntall, "\n" + karakterSum)

    return karakterSnitt;
}

// Overskrifter og tekst for programmet
console.log(chalk.red.underline("\nKaraktererkalkulator For 2IMI på Kuben VGS\n"))

console.log("Dette er en kalkulator for karaktersnitt.\nDen regner ut snitt basert på alle karakterer, om du går 2IMI.\nRekkefoelgen fagene kommer i, er basert paa den som vises i Inschool.\nVennligst skriv inn karakterer for gjeldende fag i input-ene som kommer under.\n")

console.log(chalk.yellow.underline("\nKarakterer fra Foerste Semester\n"))

// funksjon som spør bruker om karakter i gjeldende array, her er det foersteSemester
foersteSemester.forEach((foersteSemester) => {
    console.log("Fag:", foersteSemester)
    karakterPrompt(foersteSemester)
})

// Overskrift for tidligere standpunktskarakterer
console.log(chalk.yellow.bold.underline("\nAndre Semestere (Standpunkt)\n"));

// funksjon som spør om karakter i gjeldende array, her er det tidligereStandpunkt
tidligereStandpunkt.forEach((tidligereStandpunkt) => {
    console.log("Fag:", tidligereStandpunkt)
    karakterPrompt(tidligereStandpunkt)
})

console.log("Karaktersnitt med alle standpunkt:", karakterKalk());
