// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalRef = null;
let registerModalRef = null;
let searchModalRef = null;
let registerShoppingListModalRef = null;
let addProductToShoppingListModalRef = null;
let addProductToShoppingCartModalRef = null

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
  searchModalRef.setInfos({barcode, name}, true);
}
function closeSearchModal() {
  searchModalRef.closeModal();
}

function setRegisterShoppingListModalRef(ref) {
  registerShoppingListModalRef = ref;
}
function setRegisterShoppingListModalInfos() {
  registerShoppingListModalRef.setInfos(null, true);
}
function closeRegisterShoppingListModal() {
  registerShoppingListModalRef.closeModal();
}

function setAddProductToShoppingListModalRef(ref) {
  addProductToShoppingListModalRef = ref;
}
function setAddProductToShoppingListModalInfos(barcode, exists, id) {
  addProductToShoppingListModalRef.setInfos({barcode, exists, id}, true);
}
function closeAddProductToShoppingListModalModal() {
  addProductToShoppingListModalRef.closeModal();
}

function setAddProductToShoppingCartModalRef(ref) {
  addProductToShoppingCartModalRef = ref;
}
function setAddProductToShoppingCartModalInfos(barcode, exists, productName, shoppingListId, shoppingListProducts, shoppingCartProducts) {
  addProductToShoppingCartModalRef.setInfos({barcode, exists, productName, shoppingListId, shoppingListProducts, shoppingCartProducts }, true);
}
function closeAddProductToShoppingCartModal() {
  addProductToShoppingCartModalRef.closeModal();
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

const registerShoppingListModal = {
  setRef: setRegisterShoppingListModalRef,
  setInfos: setRegisterShoppingListModalInfos,
  close: closeRegisterShoppingListModal,
}

const addProductToShoppingListModal = {
  setRef: setAddProductToShoppingListModalRef,
  setInfos: setAddProductToShoppingListModalInfos,
  close: closeAddProductToShoppingListModalModal,
}

const addProductToShoppingCartModal = {
  setRef: setAddProductToShoppingCartModalRef,
  setInfos: setAddProductToShoppingCartModalInfos,
  close: closeAddProductToShoppingCartModal,
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

export {customModal, registerModal, searchModal, registerShoppingListModal, addProductToShoppingListModal, addProductToShoppingCartModal, errorModal};
