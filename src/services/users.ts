import constants from '../utils/constants.ts';
import get from '../utils/http.ts';
import { UserLookupOps, User } from './user.types.ts';

export default class Users {
  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }
  /**
   * Lookup/search for a user on speedrun.com
   * @param ops The lookup options 
   * @returns 
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
}