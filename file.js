/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il 
computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri 
è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */



/* function pariDispari (min, max) {
    return Math.floor(Math.random()*(min - max + 1))+ min;
}
const min = 1
const max = 6
const guess= parseInt (prompt("Inserisci un numero"))

if(randomNum % 2===0) {
    console.log("Il numero"+ randomNum + "è pari!" )
}
else{
    console.log("Il numero" + randomNum + "è dispari!")
}
 */


const userChoice = `pari`
const playerNumb = 2
const playerChoice =


 function generateNumberBetweenOneAndFive() {
    return Math.ceil(Math.random()* 5)
} 

/* const pcNumb= generateNumberBetweenOneAndFive() */
/* console.log(pcNumb, playerNumb, playerChoice)
 */
const result = sum (playerNumb, pcNumb)
console.log(result)

if(isEven(result) ) 

if (isEven(result) === playerChoice){
    console.log(`You win Result ${result}| Your choice: ${playerChoice}- Your number${playerNumb}` )
}