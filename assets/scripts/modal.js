const modal = document.querySelector('.modal')
const openModal = document.querySelector('.navbar__modal')
const closeModal = document.querySelector('.modal__header__dropClose')

openModal.onclick = function(){
    modal.style.display = "flex";
}
closeModal.onclick = function() {
    modal.style.display = "none";
  }