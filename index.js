const submit = document.getElementById('submit');
const number= document.getElementById('number');
const error = document.getElementById('error');
const email = document.getElementById('email');

submit.addEventListener("click", function () {
  
    if (number.value === ''  ) {
      number.classList.add('error');
      error.innerHTML = 'required';
  
    } else if (email.value === ''  ) {
        email.classList.add('error'); 
        error.innerHTML = 'required';
    }
    
    
    else if (email.value != '' || number.value != '' ){
     const messagePhone = 'Mobile number';
      const messageEmail = 'Email';
     log.innerHTML = messagePhone + ':'+ number.value +' ' +
     messageEmail + ':'+ email.value  ; 
    }
  });

  email.addEventListener("click", function () {
    email.classList.remove('error');
    error.innerHTML = '';
  });

  number.addEventListener("click", function () {
    number.classList.remove('error');
    error.innerHTML = '';
  });