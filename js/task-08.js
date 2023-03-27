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

