import { FakeStore } from "./fakeStore";

export class Users extends FakeStore {
  constructor() {
    super();
    this.baseUrl += "/users";
  }
}

export const users = new Users();
