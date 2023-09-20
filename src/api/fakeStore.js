import { Api } from "./base";

export class FakeStore extends Api {
  async all(options = {}) {
    const { startDate, endDate, ...rest} = options;
    const params = { startdate: startDate, enddate: endDate, ...rest };
    return await this._get("", params);
  }

  async single(id) {
    return await this._get(`/${id}`);
  }

  async add(resource) {
    return await this._post("", resource);
  }

  async update(id, resource) {
    return await this._put(`/${id}`, resource);
  }

  async delete(id) {
    return await this._delete(`/${id}`);
  }
}
