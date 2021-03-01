// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalRef = null;
function setCustomModalRef(ref) {
  customModalRef = ref;
}
function setCustomModalInfos(title, texts = [], btnRight, btnLeft) {
  customModalRef.setInfos({title, texts, btnRight, btnLeft}, true);
}
function closeCustomModal() {
  customModalRef.closeModal();
}
const customModal = {
  setRef: setCustomModalRef,
  setInfos: setCustomModalInfos,
  close: closeCustomModal,
};

// Configuração de modais de erro - Modais de erro padrão;
let errorModalRef = null;
function setErrorModalRef(ref) {
  errorModalRef = ref;
}
function setErrorModalInfos(title, texts = [], btnRight, btnLeft) {
  errorModalRef.setInfos({title, texts, btnRight, btnLeft}, true);
}
function closeErrorModal() {
  errorModalRef.closeModal();
}
const errorModal = {
  setRef: setErrorModalRef,
  setInfos: setErrorModalInfos,
  close: closeErrorModal,
};

export {customModal, errorModal};
