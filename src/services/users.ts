import constants from '../utils/constants.ts';
import get from '../utils/http.ts';
import { UserLookupOps, User, PBOptions, PB } from './user.types.ts';

export default class Users {
  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }
  /**
   * Lookup/search for a user on speedrun.com
   * @param ops The lookup options 
   * @returns {Promise<User[]>} A list of users that match the lookup options
   */
  public async lookup(ops: UserLookupOps): Promise<User[]> {
    let url = `${constants.ENDPOINT_URL}${constants.user.lookup}?`;
    const params = new URLSearchParams();

    if (ops.lookup) params.set('lookup', ops.lookup);
    if (ops.name) params.set('name', ops.name);
    if (ops.twitch) params.set('twitch', ops.twitch);
    if (ops.hitbox) params.set('hitbox', ops.hitbox);
    if (ops.twitter) params.set('twitter', ops.twitter);
    if (ops.speedrunslive) params.set('speedrunslive', ops.speedrunslive);
    
    if (params.toString() === '') {
      throw new Error('No valid parameters were provided');
    }

    url += params.toString();

    return (await get(url, this.apiKey) as any)["data"];
  }
  /**
   * Get a user by their id
   * @param id The id of the user
   * @returns {Promise<User>} The user with the given id
   */
  public async userById(id: string): Promise<User> {
    try {
      return (await get(`${constants.ENDPOINT_URL}${constants.user.lookup}/${id}`, this.apiKey) as any)["data"];
    } catch(e) {
      throw new Error("User with id " + id + " not found")
    }
  }
  /**
   * Get a user by their name
   * @param name The name of the user
   * @returns {Promise<User>} The user with the given name
   * @deprecated Users should be looked up by their id, not their name as names can change often
   */
  public async userByName(name: string): Promise<User> {
    try {
      return (await get(`${constants.ENDPOINT_URL}${constants.user.lookup}/${name}`, this.apiKey) as any)["data"];
    } catch(e) {
      throw new Error("User with name " + name + " not found")
    }
  }
  /**
   * Gets the user information of the authenticated user (requires an API key)
   * @returns {Promise<User>} The user that is authenticated with the API key
   */
  public async me(): Promise<User> {
    if (!this.apiKey) {
      throw new Error("No API key provided");
    }
    return (await get(`${constants.ENDPOINT_URL}${constants.profile}`, this.apiKey) as any)["data"]; 
  }

  public async pbs(id: string, ops?: PBOptions): Promise<PB[]> {
    let url = `${constants.ENDPOINT_URL}${constants.user.lookup}/${id}${constants.user.pb}?`;
    const params = new URLSearchParams();

    if (ops && ops.game) params.set('game', ops.game);
    if (ops && ops.series) params.set('series', ops.series);
    if (ops && ops.top) params.set('top', ops.top.toString());

    url += params.toString();

    return (await get(url, this.apiKey) as any)["data"];
  }
}