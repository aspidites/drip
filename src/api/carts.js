import { Api } from "./base";

export class Carts extends Api {
  async all(options = {}) {
    const { startDate, endDate, ...rest} = options;
    const params = { startdate: startDate, enddate: endDate, ...rest };
    return await this._get("/carts", params);
  }

  async single(cartId) {
    return await this._get(`/carts/${cartId}`);
  }

  async add(cart) {
    return await this._post("/carts", cart);
  }

  async update(cartId, cart) {
    return await this._put(`/carts/${cartId}`, cart);
  }

  async delete(cartId) {
    return await this._delete(`/carts/${cartId}`);
  }
}

export const carts = new Carts();
