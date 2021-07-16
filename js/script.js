const link = document.querySelector(".contact-us");
const popup = document.querySelector(".modal");
const cross = document.querySelector(".modal-close");
const nameInput = popup.querySelector(".name-input");
const emailInput = popup.querySelector(".email-input");
const messageInput = popup.querySelector(".message-input");

const form = popup.querySelector(".booking-date");

/* Modal Show */

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal");
  popup.classList.add("modal-show");
  nameInput.focus();

});

/* Modal Hide */

cross.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal");
  nameInput.focus();

});

/* Form Check */

form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
   evt.preventDefault();
   console.log("Заполните все необходимые поля");
  }
});
