const pricePlan = () => {
  const pricingListEl = document.querySelector('.pricing__plans__wrapper');
  const pricingInputEls = document.querySelectorAll('.pricing__input');
  pricingListEl.addEventListener('change', function (e) {
    if (e.target.value === '1') {
      pricingListEl.classList.remove('pricing__plans__wrapper__center');
      pricingListEl.classList.remove('pricing__plans__wrapper__right');
      pricingListEl.classList.add('pricing__plans__wrapper__left');
    }
    if ((e.target.value === '3')) {
      pricingListEl.classList.remove('pricing__plans__wrapper__center');
      pricingListEl.classList.remove('pricing__plans__wrapper__left');
      pricingListEl.classList.add('pricing__plans__wrapper__right');
    }
    if ((e.target.value === '2')) {
      pricingListEl.classList.remove('pricing__plans__wrapper__right');
      pricingListEl.classList.remove('pricing__plans__wrapper__left');
      pricingListEl.classList.add('pricing__plans__wrapper__center');
    }
  })
};

const chengeStars = () => {
  const inputList = document.querySelectorAll('.stars__input');
  const starsListEl = document.querySelector('.star__list');
  starsListEl.addEventListener('change', function (e) {
    let starNumber = Number(e.target.id.replace('star', ''));
    if (e.target.checked) {
      for (let i = 0; i < starNumber; i++) {
        inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#FFD36F';
      }
      for (let i = starNumber; i < inputList.length; i++) {
        inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#8989A2';
      }
    } else {
      for (let i = starNumber; i < inputList.length; i++) {
        inputList[i].parentElement.lastElementChild.lastElementChild.lastElementChild.style.fill = '#8989A2';
      }
    }
  });
}

const passTest = () => {
  const passOneEl = document.querySelector('.password');
  const passTwoEl = document.querySelector('.retype__password');
  passOneEl.addEventListener('keyup', () => {
    if (passOneEl.value !== '' && passTwoEl.value !== '') {
      if (passOneEl.value === passTwoEl.value) {
        passOneEl.style.border = '1px solid green';
        passTwoEl.style.border = '1px solid green';
      } else {
        passOneEl.style.border = '1px solid red';
        passTwoEl.style.border = '1px solid red';
      }
    }
  });
  passTwoEl.addEventListener('keyup', () => {
    if (passOneEl.value !== '' && passTwoEl.value !== '') {
      if (passOneEl.value === passTwoEl.value) {
        passOneEl.style.border = '1px solid green';
        passTwoEl.style.border = '1px solid green';
      } else {
        passOneEl.style.border = '1px solid red';
        passTwoEl.style.border = '1px solid red';
      }
    }
  });
};
pricePlan();
passTest();
chengeStars();
