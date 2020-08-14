import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../service/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
  theme: Observable<Theme>;
  ngOnInit(): void {
    this.theme = this.themeService.mode$;
  }
  toggleTheme() {
    this.themeService.toggleMode();
  }
}
