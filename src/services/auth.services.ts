import { authKey } from "@/constants/auth-key";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/utils/local-storage";
import { jwtDecode } from "jwt-decode";

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedInfo = jwtDecode(authToken);
    return decodedInfo;
  } else {
    return "";
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return true;
  } else {
    return false;
  }
};
