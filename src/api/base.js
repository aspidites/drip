import { removeEmpty } from "../utils";

export class Api {
  constructor() {
    this.baseUrl = "https://fakestoreapi.com";
    this.defaultOptions = {
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

  async _fetch(endpoint, params = {}, options = {}) {
    const queryParams = new URLSearchParams(removeEmpty(params));
    const queryString = queryParams.toString()
      ? `?${queryParams.toString()}`
      : "";

    return await fetch(`${this.baseUrl}${endpoint}${queryString}`, {
      ...this.defaultOptions,
      ...options
    }).then(response => response.json());
  }

  async _get(endpoint, params = {}, options = {}) {
    return await this._fetch(endpoint, params, options);
  }

  async _post(endpoint, body, options = {}) {
    return await this._fetch(endpoint, {}, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }

  async _patch(endpoint, body, options = {}) {
    return await this._post(endpoint, body, {
      method: "PATCH",
      ...options
    });
  }

  async _put(endpoint, body, options = {}) {
    return await this._post(endpoint, body, {
      method: "PATCH",
      ...options
    });
  }

  async _delete(endpoint, options = {}) {
    return await this._get(endpoint, {}, {
      method: "DELETE",
      ...options,
    });
  }
}
