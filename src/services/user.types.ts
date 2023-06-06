import { Run } from "./runs.types.ts";

export type UserLookupOps = {
  /** Global username/social lookup */
  lookup?: string;
  /** Usernme of the user to lookup */
  name?: string;
  /** Twitch username lookup */
  twitch?: string;
  /** Hitbox lookup */
  hitbox?: string;
  /** Twitter lookup */
  twitter?: string;
  /** SpeedRunsLive lookup */
  speedrunslive?: string;
};

export type User = {
  id: string;
  names: {
    international: string;
    japanese: string | null;
  };
  supporterAnimation: boolean;
  pronouns: string | null;
  weblink: string;
  'name-style': {
    style: "gradient" | "solid";
    colorFrom?: {
      light: string;
      dark: string;
    },
    colorTo?: {
      light: string;
      dark: string;
    },
    color?: {
      light: string;
      dark: string;
    }
  };
  role: "banned" | "user" | "trusted" | "moderator" | "admin" | "programmer";
  signup: string | null;
  location: {
    country: {
      code: string;
      names: {
        international: string;
        japanese: string | null;
      };
    };
    region?: {
      code: string;
      names: {
        international: string;
        japanese: string | null;
      };
    };
  };
  twitch: string | null;
  hitbox: string | null;
  youtube: string | null;
  twitter: string | null;
  speedrunslive: string | null;
  assets: {
    icon: {
      uri: string | null;
    };
    supporterIcon: string | null;
    image: {
      uri: string;
    };
  };
  links: {
    rel: string;
    uri: string;
  }[];
}

export type PBOptions = {
  /** Only return games with the given place `only PBs with a place equal or better than this value` */
  top?: number;
  /** `restricts the result to games and romhacks in that series; can be either a series ID or abbreviation` */
  series?: string;
  /** `restricts the result to that game; can be either a game ID or abbreviation` */
  game?: string;
}

export type PB = {
  place: number;
  run: Run; // TODO: Add run type
}