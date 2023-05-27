//For the input email
    const submit = document.getElementById('submitbtn');
    const Firstpage = document.getElementById('card');
    const Secondpage = document.getElementById('card2');
    const Inputemail = document.getElementById('InputEmail');

    submit.addEventListener('click', ValidateEmail);

    Secondpage.style.visibility = 'hidden';

    let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    function errorState(input, errorMessage) {
      input.classList.add('error');
      const small = input.parentElement.querySelector('small');
      small.textContent = errorMessage;
      const placeholderMessage='ash#loremcompany.com';
        input.placeholder=placeholderMessage;

    }

    function removeErrorState(input) {
        input.classList.remove('error');
        const small = input.parentElement.querySelector('small');
        small.textContent = '';
      }

    function ValidateEmail(e) {
      e.preventDefault();

      if (Inputemail.value.match(mailformat)) {
        Secondpage.style.visibility = 'visible';
        Firstpage.style.display = 'none';
        removeErrorState(Inputemail);
      } else {
        errorState(Inputemail, 'Valid email required');
        Secondpage.style.visibility = 'hidden';
      }
    }