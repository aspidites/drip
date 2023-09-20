import { Api } from "./base";

export class Users extends Api {
  async all(options = {}) {
    const { limit, sort = "asc" } = options;

    const queryString = limit
      ? `?${new URLSearchParams({ limit, sort }).toString()}`
      : "";

    return await this._get(`/users${queryString}`);
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
