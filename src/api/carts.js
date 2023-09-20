import { FakeStore } from "./fakeStore";

export class Carts extends FakeStore {
  constructor() {
    super();
    this.baseUrl += "/carts";
  }
}

export const carts = new Carts();
