import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { CountriesComponent } from './countries/countries.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'square', component: SquareComponent },
  { path: 'board', component: BoardComponent },
  { path: 'countries', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
