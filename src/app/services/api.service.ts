import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompetitionMatches, Competitions, TeamInfo, Teams, TeamMatches } from './api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCompetitions() {
    return this.http.get<Competitions>(environment.apiUrl + 'competitions');
  }

  getCompetitionMatches(id: string, start: string = "", end: string = "") {
    const options = (start && end) ? { params: new HttpParams().set('dateFrom', start).set('dateTo', end) } : {};
    return this.http.get<CompetitionMatches>(environment.apiUrl + `competitions/${id}/matches`, options);
  }

  getTeam(id: string) {
    return this.http.get<TeamInfo>(environment.apiUrl + `teams/${id}`);
  }

  getTeams() {
    return this.http.get<Teams>(environment.apiUrl + 'teams');
  }

  getTeamMatches(id: string, start: string = "", end: string = "") {
    const options = (start && end) ? { params: new HttpParams().set('dateFrom', start).set('dateTo', end) } : {};
    return this.http.get<TeamMatches>(environment.apiUrl + `teams/${id}/matches`, options);
  }

  convertDateToApi(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
}
