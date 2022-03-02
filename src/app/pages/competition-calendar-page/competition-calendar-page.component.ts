import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-calendar-page',
  templateUrl: './competition-calendar-page.component.html',
  styleUrls: ['./competition-calendar-page.component.scss']
})
export class CompetitionCalendarPageComponent implements OnInit {

  competition: any;
  subPage: string = "";

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const competitionId = this.route.snapshot.paramMap.get('id') || '1';
    this.apiService.getCompetitionMatches(competitionId).subscribe(
      (data) => {
        this.competition = data;
        this.subPage = this.competition.competition.name;
        console.log(this.competition)
      }
    );
  }
}


// awayTeam: {id: 57, name: 'Arsenal FC'}
// group: null
// homeTeam: {id: 402, name: 'Brentford FC'}
// id: 327362
// lastUpdated: "2022-03-02T08:20:22Z"
// matchday: 1
// odds: {msg: 'Activate Odds-Package in User-Panel to retrieve odds.'}
// referees: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// score: {winner: 'HOME_TEAM', duration: 'REGULAR', fullTime: {…}, halfTime: {…}, extraTime: {…}, …}
// season: {id: 733, startDate: '2021-08-13', endDate: '2022-05-22', currentMatchday: 27}
// stage: "REGULAR_SEASON"
// status: "FINISHED"
// utcDate: "2021-08-13T19:00:00Z"
// [[Prototype]]: Object
