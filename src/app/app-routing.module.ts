import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsPageComponent } from './pages/competitions-page/competitions-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsPageComponent,
  },
  // {
  //   path: 'competitions',
  //   component: CompetitionsComponent,
  // },
  // {
  //   path: 'competitions/:id',
  //   component: CompetitionCalendarComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
