const formHtml = document.querySelector('.login-form');
const obj = {};

const message = 'Всі поля повинні бути заповнені!';
formHtml.addEventListener('submit',foo);
function foo (evt){
evt.preventDefault();
const {email,password} = evt.currentTarget.elements;

if(!email.value.trim() || !password.value.trim()){alert(message)
return};

obj[formHtml.email.name] = `${email.value}`;
obj[formHtml.password.name] = `${password.value}`;
console.log(obj);
    }
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
  
    const email = formElements.email.value.trim();
    const password = formElements.password.value;
  
    const formData = {
      email,
      password,
};
if (email && password) {
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert('Необхідно заповнити всі поля!');
  }
}