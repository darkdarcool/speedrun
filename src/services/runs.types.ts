export type Run =  {
  id: string;
  weblink: string;
  game: string;
  level: string | null;
  category: string;
  videos: {
    text: string;
    links: {
      uri: string;
    }[];
  };
  comment: string;
  status: {
    status: string;
    examiner: string;
    'verify-date': string;
  };
  players: {
    rel: string;
    id?: string;
    name?: string;
    uri: string;
  }[];
  date: string;
  submitted: string | null;
  times: {
    primary: string;
    primary_t: number;
    realtime: string;
    realtime_t: number;
    'realtime_noloads': string;
    'realtime_noloads_t': number;
    ingame: string | null;
    ingame_t: number;
  };
  system: {
    platform: string;
    emulated: boolean;
    region: string | null;
  };
  splits: {
    rel: string;
    uri: string;
  };
  values: {
    [key: string]: string;
  };
  links: {
    rel: string;
    uri: string;
  }[];
}