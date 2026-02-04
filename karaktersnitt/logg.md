# Kalkulator For Karaktersnitt

## Mål

Dette bør bli et enkelt program som kan regne ut karaktersnitt om du går 2IMI. Planen er å bruke node.js og spørre brukeren gjennom terminalen. Først spør den om karakterene fra dette halvåret, så resten av standspunktskarakterene fra fortidige halvår. Til slutt får du en enkel måte å regne ut snittet på. Hva er ikke bedre enn å lage et redskap jeg faktisk får bruk for? Senere må jeg også lage en frontend med CSS og HTML.

## Prosessen

I utgangspunktet er dette bare et cli-program, så jeg trenger ikke tenke på html og css fordi jeg bare bruker Node. Jeg lærte nye metoder for å konvertere array til tall og hente ut summen til arrays.

Når jeg gikk over til et program som også brukte html/css måtte jeg endre mye, men fikk behold det originale funksjonen for selve utregningen.

Fortsatt da brukte jeg de samme arrays-ene og gjennomsnitts-funksjon. Det nye var å bruke js til å generere en form og valg fra 1-6 av hvert fag (som er i arrays-ene).

## Forbedringer

### GUI Frontend

Det hadde vært mer brukervennlig med et GUI istedenfor et TUI og krever ikke Node, som ikke er vanilla, installert. Dette er noe jeg kommer til å lage, men nå har jeg logikken klar for scriptet.

### 

**Kilder:**

Reduce-metode for sum av array (Geeksforgeeks): [https://www.geeksforgeeks.org/javascript/javascript-array-reduce-method/](https://www.geeksforgeeks.org/javascript/javascript-array-reduce-method/)

Finne ekvivalent for array[i] i forEach-løkke: Microsoft Copilot

Bruk av 'concat()' for sammensetning av arrays (Geeksforgeeks): [https://www.geeksforgeeks.org/javascript/how-to-merge-combine-arrays-using-javascript/](https://www.geeksforgeeks.org/javascript/how-to-merge-combine-arrays-using-javascript/)

Hvordan omgjøre array til array med tall (Geeksforgeeks): [https://www.geeksforgeeks.org/javascript/how-to-convert-array-of-strings-to-array-of-numbers-in-javascript/](https://www.geeksforgeeks.org/javascript/how-to-convert-array-of-strings-to-array-of-numbers-in-javascript/)

Om unary operators (Mozilla): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)

Behandling av html for med js: [https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked4](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked4)
