import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { LogoComponent } from './components/logo/logo.component';
import { VotersComponent } from './components/voters/voters.component';
import { ResultsComponent } from './components/results/results.component';
import { CandidatesComponent } from './components/candidates/candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    VotersComponent,
    ResultsComponent,
    CandidatesComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
