import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-competitions-page',
  templateUrl: './competitions-page.component.html',
  styleUrls: ['./competitions-page.component.scss']
})
export class CompetitionsPageComponent implements OnInit {
  competitions: any[] = [];
  filteredCompetitions: any[] = [];

  searchValue: string = "";

  currentPage: number = 0;
  pageSize: number = 9;
  pageSizeOptions: number[] = [9, 18, 27];
  competitionsLength = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompetitions()
      .subscribe(
        (data) => {
          this.competitions = data.competitions;
          this.filteredCompetitions = data.competitions;

          this.filteredCompetitions = this.filteredCompetitions.slice(this.currentPage, this.pageSize);
          this.competitionsLength = data.competitions.length;
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

    this.filteredCompetitions = this.competitions.filter(
      competition => competition.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.filteredCompetitions = this.filteredCompetitions.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
  }
}
