import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
console.log(formEl);
let delay = null;
let step = null;
let amount = null;

formEl.addEventListener('submit', onFormElCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormElCreatePromise(event) {
  event.preventDefault();

  delay = event.currentTarget.delay.value;
  amount = event.currentTarget.amount.value;
  step = event.currentTarget.step.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
