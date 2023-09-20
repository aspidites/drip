import { Api } from "./base";

export class Products extends Api {
  async all(options = {}) {
    const { category, ...params } = options;
    const categorySegment = category ? `/${category}` : "";

    return await this._get(`/products${categorySegment}`, params);
  }

  async single(productId) {
    return await this._get(`/products/${productId}`);
  }

  async add(product) {
    return await this._post("/products", product);
  }

  async update(productId, product) {
    return await this._put(`/products/${productId}`, product);
  }

  async delete(productId) {
    return await this._delete(`/products/${productId}`);
  }

  async categories() {
    return await this.get("/categories");
  }
}

export const products = new Products();
