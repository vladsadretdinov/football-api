import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  @Input() competition: any;

  constructor() { }

  ngOnInit(): void {
  }

}
