import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatchingGameComponent } from './matching-game/matching-game.component';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CountriesComponent } from './countries/countries.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CasaComponent } from './pages/casa/casa.component';
import { CounrtyCardComponent } from './counrty-card/counrty-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SquareComponent,
    BoardComponent,
    MatchingGameComponent,
    CountriesComponent,
    NavComponent,
    DetailComponent,
    CasaComponent,
    CounrtyCardComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
