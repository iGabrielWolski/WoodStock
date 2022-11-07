const Btn = document.querySelector("#js-btn");
const Modal = document.querySelector("#js-modal");
const BtnModal = document.querySelector("#js-Btn-modal");

Btn.addEventListener("click",OpenModal);
BtnModal.addEventListener("click",CloseModal);

function OpenModal(){
    Modal.classList.toggle("modal-hide");
};

function CloseModal(){
    Modal.classList.toggle("modal-hide");
}