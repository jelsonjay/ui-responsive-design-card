import "./styles.css";

const popupModal = document.querySelectorAll(".popup__modal")
const popupBtns = document.querySelectorAll(".popup__btn")
const closeBtns = document.querySelectorAll(".close__btn")

// ==========POPUP MODAL============
let viewModal = function(modalClick){
  popupModal[modalClick].classList.add("active")
}

popupBtns.forEach((popupBtn, i)=> {
  popupBtn.addEventListener("click" , () => {
  viewModal(i)
   })
})

// ==========CLOSE MODAL ============
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", ()=> {
   popupModal.forEach((modal) => {
   modal.classList.remove("active")
   })
  })
})