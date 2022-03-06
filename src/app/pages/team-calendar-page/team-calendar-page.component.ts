import { TeamMatches } from './../../services/api.interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-team-calendar-page',
  templateUrl: './team-calendar-page.component.html',
  styleUrls: ['./team-calendar-page.component.scss']
})
export class TeamCalendarPageComponent implements OnInit {

  team!: TeamMatches;
  subPage: string = "";

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id') || '1';
    const startDate = this.route.snapshot.queryParamMap.get('startDate') || undefined;
    const endDate = this.route.snapshot.queryParamMap.get('endDate') || undefined;

    this.range.setValue({ start: startDate ? new Date(startDate) : null, end: endDate ? new Date(endDate) : null });

    this.apiService.getTeamMatches(teamId, startDate, endDate).subscribe(
      (data) => {
        this.team = data;
      },
      () => {
        this._snackBar.open("Произошла ошибка", "Закрыть")
      }
    );

    this.apiService.getTeam(teamId).subscribe(
      (data) => {
        this.subPage = data.name;
      },
      () => {
        this._snackBar.open("Произошла ошибка", "Закрыть")
      }
    );

    this.range.valueChanges.subscribe((range) => {
      if (range.start && range.end && this.range.valid) {
        const startDate = this.apiService.convertDateToApi(range.start);
        const endDate = this.apiService.convertDateToApi(range.end);
        const queryParams: Params = { startDate, endDate };

        this.router.navigate(
          [],
          {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge',
          });

        this.apiService.getTeamMatches(teamId, startDate, endDate).subscribe(
          (data) => {
            this.team = data;
          },
          () => {
            this._snackBar.open("Произошла ошибка", "Закрыть")
          }
        );
      }
    })
  }
}
