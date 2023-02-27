/*
// esercizo 1 email
const emails = ["lknope@pawneeparks.gov", "eliza.doolittle@otmail.com", "pinocchio@realboys.com", "hodor@hodor.hodor","giovannimucciaccia@gmail.com"];


while (true){
  // Chiedi all’utente la sua email,

  let userEmail = prompt('Inserisci la tua email');
  const allowed = [];
  for( let i = 0; i < emails.length; i++){
  // controlla che sia nella lista di chi può accedere,
  
    if(userEmail === emails[i]){
      allowed.push(userEmail);
    }else{
      continue;
    }    
  }
  // stampa un messaggio appropriato sull’esito del controllo.
  if (allowed.length > 0){
    console.log('Accesso consentito');
    break;
    
  }else{
    console.log('Accesso negato');
    break;
  }

}

*/
// esercizio 2 dadi

let userWin = [];
let computerWin = [];

while (userWin.length < 5 && computerWin.length < 5){
    
  // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  
  let computerGuess = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber, computerGuess);
  // l'utente genera la sua risposta
  let userGuess = parseInt(prompt('Scegli un numero da 1 a 6'));  

  // controllo che l'input dell'utente sia tra 1 e 6
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 6) {
    alert('Devi inserire un numero tra 1 e 6');
    continue;
  }

  // vince il primo che arriva a 5 risposte esatte
  if(userGuess === randomNumber){
    userWin.push('1')
    alert('Hai indovinato!');
    console.log(userWin, computerWin);
    

  }else if (computerGuess === randomNumber){
    computerWin.push('1')
    alert('Il computer ha indovinato!');
    console.log(userWin, computerWin);

    
  }else{
    alert('Mi dispiace, nessuno ha indovinato!');
    console.log(userWin, computerWin);

  }
  
  
  // controlla se quqalcuno ha vinto
  if (userWin.length === 5) {
    alert('Hai vinto!');
    break;
  } else if (computerWin.length === 5) {
    alert('Il computer ha vinto!');
    break;
  }

}
