
const emails = ["lknope@pawneeparks.gov", "eliza.doolittle@otmail.com", "pinocchio@realboys.com", "hodor@hodor.hodor","giovannimucciaccia@gmail.com"];


if (true){
  let userEmail = prompt('Inserisci la tua email');
  const allowed = [];
  const notAllowed = [];
  for( let i = 0; i < emails.length; i++){
  
    if(userEmail === emails[i]){
      allowed.push(userEmail);
    }else{
      continue;
    }    
  }
  if (allowed.length > 0){
    console.log('Accesso consentito');
    
  }else{
    console.log('Accesso negato');
    
  }

}



