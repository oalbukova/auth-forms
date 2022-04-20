import { TAuthorize, TLogin, TUser } from "../utils/types";

export const API_URL: string = "http://188.166.119.86:8080/api/user/";

export const registerRequest = async (data: TUser): Promise<Response> =>
  await fetch(`${API_URL}register/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const verifyRequest = async (key: string): Promise<Response> =>
  await fetch(`${API_URL}register/verify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: key }),
  });

export const authorizeRequest = async (data: TAuthorize): Promise<Response> =>
  await fetch(`${API_URL}pre-login/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

export const loginRequest = async (data: TLogin): Promise<Response> =>
  await fetch(`${API_URL}login/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
