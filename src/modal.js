(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    openModalBtnBuy: document.querySelector("[data-modal-buy-open]"),
    closeModalBtnBuy: document.querySelector("[data-modal-buy-close]"),
    modalBuy: document.querySelector("[data-modal-buy]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
    refs.openModalBtnBuy.addEventListener("click", toggleModal);
    refs.closeModalBtnBuy.addEventListener("click", toggleModal);
    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle("is-hidden");
    }
  
})();