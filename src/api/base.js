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

  async _get(endpoint, options = {}) {
    return await fetch(`${this.baseUrl}${endpoint}`, {
      ...this.defaultOptions,
      ...options
    }).then(response => response.json());
  }

  async _post(endpoint, body, options = {}) {
    return await fetch(`${this.baseUrl}${endpoint}`, {
      ...this.defaultOptions,
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }).then(response => response.json());
  }

  async _patch(endpoint, body, options = {}) {
    return await fetch(`${this.baseUrl}${endpoint}`, {
      ...this.defaultOptions,
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    }).then(response => response.json());
  }

  async _put(endpoint, body, options = {}) {
    return await fetch(`${this.baseUrl}${endpoint}`, {
      ...this.defaultOptions,
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    }).then(response => response.json());
  }

  async _delete(endpoint, options = {}) {
    return await fetch(`${this.baseUrl}${endpoint}`, {
      ...this.defaultOptions,
      ...options,
      method: "DELETE",
    }).then(response => response.json());
  }
}
