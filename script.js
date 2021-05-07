'use strict';
//***********pravidlo: např. chceme jen prvky dělitelné dvěmi (zbytek smazat)***********************************
const listOfElements = [1, 2, 5, 7, 10];

//první varianta - prvky splňující pravidlo budou v novém seznamu newList
const newList = listOfElements.filter((item) => {
  return item % 2 === 0; //zde se zadává pravidlo za return
});
console.log(newList);

//druhá varianta - prvky splňující pravidlo budou v novém seznamu newList2
const newList2 = [];
listOfElements.forEach((item) => {
  if (item % 2 === 0 /* zde se zadává pravdilo */) {
    newList2.push(item);
  }
});
console.log(newList2);

//********** složitější pravidla pro protřídění seznamu, si myslím, že je obtížné všeobecně zapsat **********/
// například pravidlo: chceme jen nejdelší rostoucí sekvenci čísel, které v seznamu následují přímo po sobě (zbytek smazat).
const numbers = [
  -24,
  -11,
  27,
  29,
  -4,
  -28,
  -21,
  -14,
  3,
  -8,
  24,
  19,
  -25,
  -2,
  -1,
  11,
  32,
  -31,
  5,
];

let sekvence = [];
let singleSekvence = [];

while (numbers.length > 0) {
  let item = numbers.shift();
  if (item < numbers[0]) {
    singleSekvence.push(item);
  } else if (item > numbers[0]) {
    singleSekvence.push(item);
    sekvence.push(singleSekvence);
    singleSekvence = [];
  } else if (numbers.length === 0) {
    singleSekvence.push(item);
    sekvence.push(singleSekvence);
  }
}
//console.log(sekvence);

// zjištění délky jednotlivých polí
let nejdelsiSekvenceCisel = 0;
for (let pole of sekvence) {
  let delkaSekvence = pole.length;
  if (delkaSekvence > nejdelsiSekvenceCisel) {
    nejdelsiSekvenceCisel = delkaSekvence;
  }
}
//console.log(nejdelsiSekvenceCisel);

//vypsání nejdelší rostoucí sekvence
sekvence.forEach((array) => {
  if (array.length === nejdelsiSekvenceCisel) {
    console.log(array);
  }
});
