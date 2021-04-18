// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalRef = null;
let registerModalRef = null;
let searchModalRef = null;

function setCustomModalRef(ref) {
  customModalRef = ref;
}
function setCustomModalInfos(title) {
  customModalRef.setInfos({title, texts, btnRight, btnLeft}, true);
}
function closeCustomModal() {
  customModalRef.closeModal();
}

function setRegisterModalRef(ref) {
  registerModalRef = ref;
}
function setRegisterModalInfos(barcode, exists) {
  registerModalRef.setInfos({barcode, exists}, true);
}
function closeRegisterModal() {
  registerModalRef.closeModal();
}

function setSearchModalRef(ref) {
  searchModalRef = ref;
}
function setSearchModalInfos(barcode, name) {
  console.log("SET SEARCH MODAL INFOS: ", {barcode, name});
  searchModalRef.setInfos({barcode, name}, true);
}
function closeSearchModal() {
  searchModalRef.closeModal();
}

const customModal = {
  setRef: setCustomModalRef,
  setInfos: setCustomModalInfos,
  close: closeCustomModal,
};

const registerModal = {
  setRef: setRegisterModalRef,
  setInfos: setRegisterModalInfos,
  close: closeRegisterModal,
}

const searchModal = {
  setRef: setSearchModalRef,
  setInfos: setSearchModalInfos,
  close: closeSearchModal,
}

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

export {customModal, registerModal, searchModal, errorModal};
