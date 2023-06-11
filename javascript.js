
const btnEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#editProfile');
const closeIcons = document.querySelectorAll('.popup__close-icon')
const popupNewImg = document.querySelector('#newImg')
const btnNew = document.querySelector('.profile__add-button')
const container = document.querySelector('.container')
const images = document.querySelectorAll('.elements__img');
const formElementProf = document.querySelector('#form-profile')
const avtorName =formElementProf.querySelector('#popup__avtor-name')
const avtorDiscription = formElementProf.querySelector('#popup__avtor-discription');
const formElementAdd = document.querySelector('#form-add');
const like = document.querySelectorAll('.elements__heart')
const delet = document.querySelectorAll('.elements__delet-icon');
const elementsContainer = document.querySelector('.elements');
const profileName =  document.querySelector('.profile__name')
 const profileDiscription = document.querySelector('.profile__discription')
 const inputPlace = formElementAdd.querySelector('#popup__place-name')
 const inputSrcPlace = formElementAdd.querySelector('#popup__src-name')
/* открытие и закрытие формы*/
btnNew.addEventListener('click', function () {
  openPopup(popupNewImg);
});
btnEdit.addEventListener('click', function () {
  avtorName.value =profileName.textContent;
  avtorDiscription.value =profileDiscription.textContent;
  openPopup(popupProfile);
});
closeIcons.forEach(function (btn) {
  const popup = btn.closest(('.popup'))
  btn.addEventListener('click', () => closePopup(popup));
})
/* кнопка сохранить меняет имя жака кусто */

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = avtorName.value;
  profileDiscription.textContent = avtorDiscription.value;
  popupProfile.classList.remove('popup_opened')
}
formElementProf.addEventListener('submit', handleFormSubmit);
/* кнопка сохранить создаёт новую карточку*/
function addItem(evt) {
  evt.preventDefault();
  const place = inputPlace.value;
  const srcPlace= inputSrcPlace.value;
  elementsContainer.prepend(addCard(place, srcPlace))
  popupNewImg.classList.remove('popup_opened')
  evt.target.reset()

}
formElementAdd.addEventListener('submit', addItem);
/* функция добавить карточки */
function addCard(name, src) {
  const imageTemplate = document.querySelector('#img-temlate').content;
  const imageElement = imageTemplate.querySelector('.popup__container-img').cloneNode(true);
  const placeTemplate = document.querySelector('#place-template').content;
  const itemElement = placeTemplate.querySelector('#elements__item').cloneNode(true);
  itemElement.querySelector('.elements__img').src = `${src}`;
  itemElement.querySelector('.elements__img').alt = `${name}`;
  itemElement.querySelector('.elements__discritpion').textContent = name;
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
    imageElement.querySelector('.popup__img').src = `${src}`;
    imageElement.querySelector('.popup__img').alt = `${name}`;
    imageElement.querySelector('.popup__img-name').textContent = itemElement.querySelector('.elements__discritpion').textContent
    const popupImg = document.querySelector('#popup-img');
    popupImg.prepend(imageElement);
    openPopup(popupImg);
    const popupimageClose = document.querySelector('.popup__close-icon_img');
    popupimageClose.addEventListener('click', function () {
      closePopup(popupImg)
      imageElement.remove();
    })
  })
  return itemElement;
}
/* создаю карточки */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

for (let i = 0; i < initialCards.length; i++) {
  elementsContainer.prepend( addCard(initialCards[i].name, initialCards[i].link))
}
/* открытие и закрытие  popup */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}