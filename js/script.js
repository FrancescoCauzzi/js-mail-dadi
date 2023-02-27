
// esercizo 1 email
const emails = ["lknope@pawneeparks.gov", "eliza.doolittle@otmail.com", "pinocchio@realboys.com", "hodor@hodor.hodor","giovannimucciaccia@gmail.com"];

let mySubmitBtnEl = document.getElementById('my-submit-btn');

mySubmitBtnEl.addEventListener('click', function(){
  while (true){
    // Chiedi all’utente la sua email,
    let userEmail = document.getElementById('InputEmail1').value;
    console.log(userEmail);
    // let userEmail = prompt('Inserisci la tua email');
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
      window.alert('Accesso consentito')
      break;
      
    }else{
      console.log('Accesso negato');
      window.alert('Accesso negato')
      break;
    }
  
  }

})





// esercizio 2 dadi

let userWin = [];
let computerWin = [];

const startBtnEl = document.getElementById('start-game');
const winnerBannerEl = document.getElementById('winner-banner');





startBtnEl.addEventListener('click', function(){
    while (userWin.length < 5 && computerWin.length < 5){
      let userGuessInputEl = document.getElementById('userGuessInput');
      let userGuess = Number(userGuessInputEl.value);
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 6) {
        window.alert(('Devi inserire un numero tra 1 e 6'));
        break;
     
      }else{
        
        console.log(userGuess);
        console.log(userWin, computerWin);
        
        // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        
        let computerGuess = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber, computerGuess);
          
      
        // controllo che l'input dell'utente sia tra 1 e 6
        
      
        // vince il primo che arriva a 5 risposte esatte
        if(userGuess === randomNumber){
          userWin.push('1')
          
          alert(('Hai indovinato!'));
          
      
        }else if (computerGuess === randomNumber){
          computerWin.push('1')
          
          alert(('Il computer ha indovinato!'));
      
          
        }else{
          
          alert(('Mi dispiace, nessuno ha indovinato!'));
      
        }
        
        
        // controlla se quqalcuno ha vinto
        if (userWin.length === 5) {
          winnerBannerEl.style.display = 'block'
          winnerBannerEl.innerHTML = 'Hai Vinto'
          break;
        } else if (computerWin.length === 5) {
          winnerBannerEl.style.display = 'block'

          winnerBannerEl.innerHTML = 'Il computer ha vinto'
          break;
        }
        // Reset the input field to allow the user to input another guess
        userGuessInputEl.value = '';
      } 
      
    }
        
    
});


