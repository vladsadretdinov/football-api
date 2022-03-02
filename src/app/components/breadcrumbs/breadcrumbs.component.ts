import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() page: string = "";
  @Input() pageUrl: string = "/";
  @Input() subPage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
