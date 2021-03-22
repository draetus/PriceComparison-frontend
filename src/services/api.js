import { create } from "apisauce";

import { Navigation, paths } from "../navigation";

// const baseURL = "http://localhost:8090"; // LOCAL
const baseURL = "http://192.168.15.7:8090"; // PC LOCAL

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

const checkIfExists = async (barCode) => {
  return await api.get("/product/exists/" + barCode);
}

const saveProduct = async (data) => {
  return await api.post("/product", data);
}

export default {
  logout,
  login,
  checkIfExists,
  saveProduct
};
