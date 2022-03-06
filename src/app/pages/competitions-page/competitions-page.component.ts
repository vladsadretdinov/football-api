import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from './../../services/api.service';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Competition, Competitions } from 'src/app/services/api.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-competitions-page',
  templateUrl: './competitions-page.component.html',
  styleUrls: ['./competitions-page.component.scss']
})
export class CompetitionsPageComponent implements OnInit {
  competitions: Competition[] = [];
  filteredCompetitions: Competition[] = [];

  searchValue: string = "";

  currentPage: number = 0;
  pageSize: number = 9;
  pageSizeOptions: number[] = [9, 18, 27];
  competitionsLength = 0;
  pageCols: number = 3;

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
      this.pageCols = result.matches ? 1 : 3;
    });
  }

  ngOnInit(): void {
    const pageSize = Number(this.route.snapshot.queryParamMap.get('pageSize')) || 9;
    const currentPage = Number(this.route.snapshot.queryParamMap.get('currentPage')) || 0;

    this.pageSize = pageSize;
    this.currentPage = currentPage;

    this.apiService.getCompetitions()
      .subscribe(
        (data: Competitions) => {
          this.competitions = data.competitions;
          this.filteredCompetitions = data.competitions;

          this.filteredCompetitions = this.filteredCompetitions.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
          this.competitionsLength = data.competitions.length;
        },
        () => {
          this._snackBar.open("Произошла ошибка", "Закрыть")
        }
      )
  }

  researchCompetitions(searchValue: string = "") {
    this.searchValue = searchValue;

    if (searchValue === "" || searchValue === undefined) {
      this.filteredCompetitions = this.competitions;
    }
    else {
      this.filteredCompetitions = this.competitions.filter(
        competition => competition.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    this.filteredCompetitions = this.filteredCompetitions.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
    this.competitionsLength = this.filteredCompetitions.length;
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

    this.filteredCompetitions = this.competitions.filter(
      competition => competition.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.filteredCompetitions = this.filteredCompetitions.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
  }
}
