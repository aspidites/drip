import { FakeStore } from "./fakeStore";

export class Products extends FakeStore {
  constructor() {
    super();
    this.baseUrl += "/products";
  }

  async all(options = {}) {
    const { category, ...params } = options;
    return await this._get(category ? `/${category}` : "", params);
  }

  async categories() {
    return await this.get("/categories");
  }
}

export const products = new Products();
