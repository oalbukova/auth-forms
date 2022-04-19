import {TUser} from "../utils/types";

export const API_URL: string = "http://188.166.119.86:8080/api/";

export const registerRequest = async (data: TUser): Promise<Response> => await fetch(`${API_URL}user/register/`, {
  method: "POST", headers: {
    Accept: "application/json", "Content-Type": "application/json",
  }, body: JSON.stringify(data),
})
