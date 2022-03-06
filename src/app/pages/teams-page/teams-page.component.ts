import { Teams, Team } from './../../services/api.interfaces';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from './../../services/api.service';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  teams: Team[] = [];
  filteredTeams: Team[] = [];

  searchValue: string = "";

  currentPage: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 20, 30];
  teamsLength = 0;
  pageCols: number = 5;

  constructor(
    private apiService: ApiService,
    private breakpointObserver: BreakpointObserver,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.breakpointObserver.observe(
      ['(max-width: 1366px)']
    ).subscribe((result) => {
      this.pageCols = result.matches ? 1 : 5;
    });
  }

  ngOnInit(): void {
    const pageSize = Number(this.route.snapshot.queryParamMap.get('pageSize')) || 10;
    const currentPage = Number(this.route.snapshot.queryParamMap.get('currentPage')) || 0;

    this.pageSize = pageSize;
    this.currentPage = currentPage;

    this.apiService.getTeams()
      .subscribe(
        (data: Teams) => {
          this.teams = data.teams;
          this.filteredTeams = data.teams;

          this.filteredTeams = this.filteredTeams.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
          this.teamsLength = data.teams.length;
        },
        () => {
          this._snackBar.open("Произошла ошибка", "Закрыть")
        }
      )
  }

  researchTeams(searchValue: string = "") {
    this.searchValue = searchValue;

    if (searchValue === "" || searchValue === undefined) {
      this.filteredTeams = this.teams;
    }
    else {
      this.filteredTeams = this.teams.filter(
        team => team.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    this.filteredTeams = this.filteredTeams.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
    this.teamsLength = this.filteredTeams.length;
  }

  public handlePage(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    const queryParams: Params = { currentPage: this.currentPage, pageSize: this.pageSize };
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });

    this.filteredTeams = this.teams.filter(
      team => team.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.filteredTeams = this.filteredTeams.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
  }
}
