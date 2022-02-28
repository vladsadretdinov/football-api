import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-competitions-page',
  templateUrl: './competitions-page.component.html',
  styleUrls: ['./competitions-page.component.scss']
})
export class CompetitionsPageComponent implements OnInit {
  competitions = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompetitions()
      .subscribe(
        (data) => {
          this.competitions = data.competitions
        }
      )
  }

}
