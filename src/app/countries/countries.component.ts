import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../service/theme.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
  theme: Observable<Theme>;
  ngOnInit(): void {
    this.theme = this.themeService.mode$;
  }
  toggleTheme() {
    this.themeService.toggleMode();
  }
}
