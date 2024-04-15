const nameInput = document.querySelector('.nameInput');
      const surnameInput = document.querySelector('.surnameInput');
      const passwordInput = document.querySelector('.passwordInput');
      const submitBtn = document.querySelector('.submitButton');
      const checkBtn = document.querySelector('.checkButton');
      const formInput = document.querySelector('.form');
      const userName = nameInput.value;
      const usersurName = surnameInput.value;
      const userPass = passwordInput.value;
      let userDetails = JSON.parse(localStorage.getItem('userDetails')) || {
        "name": nameInput.value,
        "lastName": surnameInput.value,
        "password": passwordInput.value
      };

      submitBtn.addEventListener('click', () => {
        
        userDetails = {
          "name": nameInput.value,
          "lastName": surnameInput.value,
          "password": passwordInput.value
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        
      });
      checkBtn.addEventListener('click', () => {
        console.log(userDetails = JSON.parse(localStorage.getItem('userDetails')));
      });