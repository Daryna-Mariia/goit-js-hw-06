const formHtml = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert('Необхідно заповнити всі поля!');
  }
