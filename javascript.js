
const btnEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#editProfile');
const closeIcons = document.querySelectorAll('.popup__close-icon')
const popupNewImg = document.querySelector('#newImg')
const btnNew = document.querySelector('.profile__add-button')
const container = document.querySelector('.container')
const images = document.querySelectorAll('.elements__img');
const imageTemplate = document.querySelector('#img-temlate').content;
const imageElement = imageTemplate.querySelector('#popup-img').cloneNode(true);
const formElementProf = document.querySelector('#form-profile')
const formElementAdd = document.querySelector('#form-add');
const like = document.querySelectorAll('.elements__heart')
const delet = document.querySelectorAll('.elements__delet-icon');
/* открытие и закрытие формы*/
btnNew.addEventListener('click', function () {
  popupNewImg.classList.add('popup_opened');
});
btnEdit.addEventListener('click', function () {
  popupProfile.classList.add('popup_opened');
});
closeIcons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    popupProfile.classList.remove('popup_opened')
    popupNewImg.classList.remove('popup_opened');
  })
})
/* кнопка сохранить меняет имя жака кусто */

function handleFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = formElementProf.querySelector('#popup__avtor-name').value;;
  document.querySelector('.profile__discription').textContent = formElementProf.querySelector('#popup__avtor-discription').value;
  popupProfile.classList.remove('popup_opened')
}
formElementProf.addEventListener('submit', handleFormSubmit);
/* кнопка сохранить создаёт новую карточку*/
function addItem(evt) {
  evt.preventDefault();
  const elementsContainer = document.querySelector('.elements')
  const place = formElementAdd.querySelector('#popup__place-name').value;
  const srcPlace = formElementAdd.querySelector('#popup__src-name').value;
  const placeTemplate = document.querySelector('#place-template').content;
  const itemElement = placeTemplate.querySelector('#elements__item').cloneNode(true);
  itemElement.querySelector('.elements__img').src = `${srcPlace}`;
  itemElement.querySelector('.elements__img').alt = `${place}`;
  itemElement.querySelector('.elements__discritpion').textContent = place;
  elementsContainer.prepend(itemElement);
  /* лайк */
  itemElement.querySelector('.elements__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__heart_active');
  })
  /* удалить*/
  itemElement.querySelector('.elements__delet-icon').addEventListener('click', function () {
    itemElement.remove()
  })
  /*открыть попап картинки */
  itemElement.querySelector('.elements__img').addEventListener('click', function () {
    imageElement.querySelector('.popup__img').src = `${srcPlace}`;
    imageElement.querySelector('.popup__img').alt = `${place}`;
    imageElement.querySelector('.popup__img-name').textContent = itemElement.querySelector('.elements__discritpion').textContent
    container.prepend(imageElement);
    const popupImg = document.querySelector('#popup-img');
    popupImg.classList.add('popup_opened');
    const popupimageClose = document.querySelector('.popup__close-icon_img');
    popupimageClose.addEventListener('click', function () {
      popupImg.classList.remove('popup_opened');
    })
  })
  popupNewImg.classList.remove('popup_opened')
}
formElementAdd.addEventListener('submit', addItem);
/* лайк */
like.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('elements__heart_active');
  })
})
/* удалить элемент*/
delet.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.parentElement.remove()
  })
})
/* открыть картинку во весь экран */
images.forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log('ff')
    imageElement.querySelector('.popup__img').src = `${btn.getAttribute('src')}`;
    imageElement.querySelector('.popup__img').alt = `${btn.getAttribute('alt')}`;
    imageElement.querySelector('.popup__img-name').textContent = btn.parentElement.querySelector('.elements__discritpion').textContent
    container.prepend(imageElement);
    const popupImg = document.querySelector('#popup-img');
    popupImg.classList.add('popup_opened');
    const popupimageClose = document.querySelector('.popup__close-icon_img');
    popupimageClose.addEventListener('click', function () {
      popupImg.classList.remove('popup_opened');
    })
  })
})