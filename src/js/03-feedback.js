const form = document.querySelector('.feedback-form');
var throttle = require('lodash.throttle');

form.addEventListener(
  'input',
  throttle(handlerObject, 500, { leading: true, trailing: true })
);

let emailValue ='';
let messageVlaue = '';
function handlerObject(evt) {
  if (evt.target.name === 'email') {
    emailValue = evt.target.value;
  }
  if (evt.target.name === 'message') {
    messageVlaue = evt.target.value;
  }
  const objForm = {
    userEmail: emailValue,
    userMessag: messageVlaue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}

const localText = localStorage.getItem('feedback-form-state');
if (localText) {
  autoText(JSON.parse(localText));
}
function autoText(objText) {
  const { email, message } = form.elements;
  email.value = objText.userEmail;
  message.value = objText.userMessag;
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const { email, message } = form.elements;

  const lastMessage = {
    userEmail: email.value,
    userMessage: message.value,
  };
  console.log(lastMessage);

  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}
