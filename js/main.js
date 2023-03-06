'use strict';

// funzioni---------------------------------------------------------------------------------------------------------

function myCreateElement(elementType, class1, class2 = '', txt = ''){         //funzione crea elementi
    const myElement = document.createElement(elementType);
    myElement.append(txt)
    myElement.classList.add(class1);
    myElement.classList.add(class2);
    return myElement
};

function myAppend(numBox, where, classSize, content){        //funzione appendi elementi
    for (let i = 0; i < numBox; i++){
    where.append(myCreateElement('div', 'box', classSize, content[i]))
}
};

function getRandomInt(min, max) {        //funzione genera numeri interi random con minimo e massimo compresi
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomNumberArrayGenerator(howMany, between1, between2){    //funzione genera array di numeri random e controlla non siano gia stati scelti    
    while (randomNumberArray.length < howMany){
    let possibleNumber = getRandomInt(between1, between2);
    if (randomNumberArray.includes(possibleNumber) === false){
        randomNumberArray.push(possibleNumber);
    }
    }
    return randomNumberArray
};

function numberInput (howMany){
    while (chosenNumbers.length < howMany.length){
        let numberSelected = Number(prompt('inserisci un numero'))
        if (numberSelected !== NaN && numberSelected > 0){
            chosenNumbers.push(numberSelected)
        }
    }
    return chosenNumbers  
}

function controlArrayContent (){
    for (let i = 0; i < randomNumberArray.length; i++){
        if (randomNumberArray.includes(chosenNumbers[i])){
            rightNumbers.push(chosenNumbers[i])
        }
    }
}

function opacity(){
    div.classList.toggle('now-you-dont')
}

//main-----------------------------------------------------------------------------------------

let randomNumberArray = [];
let chosenNumbers = [];
let rightNumbers = [];
const div = document.getElementById('numeri')
// howManyNumbers();
randomNumberArrayGenerator(5, 1, 100);
myAppend(5, div, 'box', randomNumberArray);
setTimeout (opacity, 3000);
setTimeout (function(){
    numberInput(randomNumberArray);
    controlArrayContent ();
    div.innerHTML = `hai ricordato esattamente questi numeri: ${rightNumbers} ossia ${rightNumbers.length} su 5`
    opacity();
}, 10000)
