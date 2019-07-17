import { AUTH_TOKEN } from "../constants";
import cookie from "cookie";

export const setCurrentUser = (token: string) => {
  document.cookie = cookie.serialize(AUTH_TOKEN, token, {
    maxAge: 30 * 24 * 60 * 60
  });
};

export const removeCurrentUser = () => {
  document.cookie = cookie.serialize(AUTH_TOKEN, "", {
    maxAge: -1
  });
};
