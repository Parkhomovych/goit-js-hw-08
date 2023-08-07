var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
email.value = '';
message.value = '';

form.addEventListener(
  'input',
  throttle(handlerObject, 500, { leading: true, trailing: true })
);

function handlerObject(evt) {
  const objForm = {
    userEmail: email.value,
    userMessage: message.value,
  };
  if (evt.target.name === 'email') {
    userEmail = evt.target.value;
  }
  if (evt.target.name === 'message') {
    userMessage = evt.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}

const localText = localStorage.getItem('feedback-form-state');
if (localText) {
  autoText(JSON.parse(localText));
}

function autoText(objText) {
  console.log(objText);
  const {userEmail,userMessage} = objText
  console.log(userMessage);
  const { email, message } = form.elements;
  email.value = userEmail;
  message.value = userMessage;
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const lastLog = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(lastLog));

  localStorage.removeItem('feedback-form-state');
  const { email, message } = form.elements;
  email.value = '';
  message.value = '';
}
