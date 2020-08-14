import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Country } from 'src/app/types/api';
import { Observable } from 'rxjs';
const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})
export class CasaComponent implements OnInit {
  private source: Country[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }
}
