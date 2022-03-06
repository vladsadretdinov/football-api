import { Component, OnInit, Input } from '@angular/core';
import { Competition } from 'src/app/services/api.interfaces';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  @Input()
  competition!: Competition;

  constructor() { }

  ngOnInit(): void {
  }

}
