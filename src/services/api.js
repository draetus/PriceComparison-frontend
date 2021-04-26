import { create } from "apisauce";

import { Navigation, paths } from "../navigation";

// const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://10.0.0.105:8090"; // PC LOCAL
// const baseURL = "http://192.168.15.5:8090"; // PC LOCAL

let token = null;

const api = create({
  baseURL,
  timeout: 300000, // 5 min,
});

const requestTransform = (request) => {
  if (token) {
    request.headers.authorization = `${token}`;
  }
};

const naviMonitor = (response) => {
  const { status, headers } = response;
  if (status === 401) {
    logout();
    if (response.config.url !== "/login") {
      navigate(paths.Landing);
    }
  }

  if (headers.authorization) {
    token = headers.authorization;
  }
};

// BEARER AUTHENTICATION
api.addRequestTransform(requestTransform);
// GET THE ACCESS TOKEN FROM REQS
api.addMonitor(naviMonitor);

const logout = () => {
  token = null;
};

const login = async (body) => {
  logout();
  return await api.post("/login", body);
};

const checkIfExists = async (barcode) => {
  return await api.get("/product/exists/" + barcode);
}

const saveProduct = async (data) => {
  return await api.post("/product", data);
}

const savePriceProduct = async (data) => {
  return await api.post("/price", data);
}

const searchProduct = async (barcode) => {
  return await api.get("/product/" + barcode);
}

const checkIfExistsProduct = async (barcode) => {
  return await api.get("/product/exists/" + barcode);
}

const searchShoppingList = async () => {
  return await api.get("/shoppinglist");
}

const createShoppingList = async (data) => {
  return await api.post("/shoppinglist", data);
}

const deleteShoppingList = async (id) => {
  return await api.delete("/shoppinglist/" + id);
}

const searchShoppingListProducts = async (id) => {
  console.log("SEARCH SHOPPING LIST PRODUCTS: ", "/shoppinglist/" + id + "/products");
  return await api.get("/shoppinglist/" + id + "/products");
}

const addProductToShoppingList = async (id, data) => {
  return await api.post("/shoppinglist/" + id + "/product", data);
}

const deleteProductFromShoppingList = async (id, barcode) => {
  return await api.delete("/shoppinglist/" + id + "/product/" + barcode);
}

export default {
  logout,
  login,
  checkIfExists,
  saveProduct,
  savePriceProduct,
  searchProduct,
  checkIfExistsProduct,
  searchShoppingList,
  createShoppingList,
  deleteShoppingList,
  searchShoppingListProducts,
  addProductToShoppingList,
  deleteProductFromShoppingList
};
