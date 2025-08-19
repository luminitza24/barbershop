() => {
  const refs = {
    modalOpen: document.querySelector("[data-modal-open]"),
    modalClose: document.querySelector("[data-model-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.modalOpen.addEventListener("click", toggleModal);
  refs.modalClose.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
};
