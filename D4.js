/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*
let l1 = parseFloat(prompt("inserisci il valore del primo lato"))
let l2 = parseFloat(prompt("inserisci il valore del secondo lato"))

function area(l1,l2) {
    return l1 * l2;
}

console.log(area(l1,l2)) 
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*
let add1 = parseInt(prompt("Inserisci il valore del primo addendo"))
let add2 = parseInt(prompt("Inserisci il valore del secondo addendo"))

function crazySum(add1,add2){
    if (add1 === add2) {
        return (add1 + add2) * 3;
    }else {
        return add1 + add2;
    }
}

console.log(crazySum(add1,add2)) 
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*
let add3 = parseInt(prompt("Inserisce l'addendo a cui vuoi sottrarre 19"))
let add4 = 19
function crazyDiff (add3, add4) {
    if (add3 > 19) {
        return (add3 - add4) * 3;
    } else {
        return add3 - add4;
    }
} 

console.log(crazyDiff(add3,add4))
/*

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*
let n = parseInt(prompt("Inserisci un numero maggiore di 20 ma minore o uguale a 100 o in alternativa uguale a 400"))

function boundary (n) {
    if (n > 20 && n <= 100 || n === 400){
        return true;
    } else {
        return false;
    }
}

console.log(boundary(n))
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
let testo = toString(prompt("Inserisci una parola o frase e noi aggiungeremo Epicode ad essa"))

function epify (testo) {
    if (testo.indexOf(1,7) === "EPICODE"){
        return testo
    }else {
        return "EPICODE " + testo
    }
}

console.log(epify(testo))
*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*
let num = parseInt(prompt("Inserisci un numero positivo per controllare se è divisibile per 3 o per 7"))

function check3and7 (num) {
    if (num > 0 && ( num % 3 === 0 || num % 7 ===0)){
        return console.log("Il numero è positivo ed è divisibile almeno per 3 o 7")
    } else {
        return console.log("Inserisci un numero positivo")
    }
}
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*
let parola = prompt("parola da invertire")
let lista = parola.split("")
console.log(lista)

function reverseString (lista) {
    for (i=0; i < lista.lenght; i++){

    }
}
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*
let frase = prompt("Frase da dividere")
let lista = frase.split(" ")
console.log(lista)

function upperFirst(lista){
    for (i = 0; i<lista.lenght; i++){
        return lista.charAt(0).uppercase() 
    }

}
console.log(upperFirst(lista))   
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/*
let frase = prompt("Inserisci una parola o frase da tagliare")

function cutString (frase){
    return frase.slice(1,-1)
}

console.log(cutString(frase))
*/
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*
let n = parseInt(prompt("Quanti numeri casuali vuoi?"))

function giveMeRandom (n){
    let casualNumber = [];
    for (i=0; i< n; i++) {
        return casualNumber.push()
    }

}
*/