import { MatchStatusesKeys } from "../pipes/match-status.pipe";

export interface Competitions {
  competitions: Competition[];
  count: number;
}

export interface Area {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl?: any;
}

export interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  emblemUrl?: any;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

export interface CompetitionMatches {
  competition: Competition;
  count: number;
  matches: CompetitionMatch[];
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}

export interface Odds {
  msg: string;
}

export interface FullTime {
  homeTeam?: any;
  awayTeam?: any;
}

export interface HalfTime {
  homeTeam?: any;
  awayTeam?: any;
}

export interface ExtraTime {
  homeTeam?: any;
  awayTeam?: any;
}

export interface Penalties {
  homeTeam?: any;
  awayTeam?: any;
}

export interface Score {
  winner?: any;
  duration: string;
  fullTime: FullTime;
  halfTime: HalfTime;
  extraTime: ExtraTime;
  penalties: Penalties;
}

export interface HomeTeam {
  id: number;
  name: string;
}

export interface AwayTeam {
  id: number;
  name: string;
}

export interface CompetitionMatch {
  id: number;
  season: Season;
  utcDate: Date;
  status: MatchStatusesKeys;
  matchday: number;
  stage: string;
  group?: any;
  lastUpdated: Date;
  odds: Odds;
  score: Score;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  referees: any[];
}

export interface Teams {
  teams: Team[];
  count: number;
}

export interface Team {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
}

export interface ActiveCompetition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: Date;
}

export interface Squad {
  id: number;
  name: string;
  position: string;
  dateOfBirth: Date;
  countryOfBirth: string;
  nationality: string;
  shirtNumber?: number;
  role: string;
}

export interface TeamInfo {
  id: number;
  area: Area;
  activeCompetitions: ActiveCompetition[];
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Squad[];
  lastUpdated: Date;
}

export interface TeamMatches {
  matches: TeamMatch[];
  count: number;
}

export interface TeamMatch {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: Date;
  status: MatchStatusesKeys;
  matchday: number;
  stage: string;
  group?: any;
  lastUpdated: Date;
  odds: Odds;
  score: Score;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  referees: any[];
}
