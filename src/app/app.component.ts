import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './service/theme.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;
  title = 'portfolio';
  constructor(private themeService: ThemeService, private api: ApiService) {}
  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
