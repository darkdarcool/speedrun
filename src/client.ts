import Users from "./services/users.ts";

export default class Client  {
  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }

  /* Services */
  /**
   * Users service
   * Gives a wrapper around the Speedrun.com users API endpoints such as:
   *  - Users lookup
   *  - Users pb's
   *  - etc.
   * @returns {Users} The users service
   * @example
   * ``` ts
   * const client = new Client();
   * const users = client.users;
   * // ...
   * ```
   */
  get users() {
    return new Users(this.apiKey);
  }
}