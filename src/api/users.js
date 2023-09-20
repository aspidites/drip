import { Api } from "./base";

export class Users extends Api {
  async all(params = {}) {
    return await this._get("/users", params);
  }

  async single(userId) {
    return await this._get(`/users/${userId}`);
  }

  async add(user) {
    return await this._post("/users", user);
  }

  async update(userId, user) {
    return await this._put(`/users/${userId}`, user);
  }

  async delete(userId) {
    return await this._delete(`/users/${userId}`);
  }
}

export const users = new Users();
