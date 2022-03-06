import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Pipes
import { MatchStatusPipe } from './pipes/match-status.pipe';

// Interceptors
import { TokenInterceptor } from './interceptors/token-interceptor';
import { CatchErrorHttpInterceptor } from './interceptors/catch-error-interceptor';

// Pages
import { CompetitionCalendarPageComponent } from './pages/competition-calendar-page/competition-calendar-page.component';
import { CompetitionsPageComponent } from './pages/competitions-page/competitions-page.component';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { TeamCalendarPageComponent } from './pages/team-calendar-page/team-calendar-page.component';

// Components
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionCardComponent } from './components/competition-card/competition-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetitionsPageComponent,
    CompetitionCardComponent,
    SearchFieldComponent,
    CompetitionCalendarPageComponent,
    BreadcrumbsComponent,
    MatchStatusPipe,
    TeamsPageComponent,
    TeamCardComponent,
    TeamCalendarPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CatchErrorHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
