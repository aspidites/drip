import { Api } from "./base";

export class Auth extends Api {
  async login(username, password) {
    return await this._post("/auth/login", {
      username,
      password
    });
  }
}

export const auth = new Auth();
