import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../types/api';

@Component({
  selector: 'app-counrty-card',
  templateUrl: './counrty-card.component.html',
  styleUrls: ['./counrty-card.component.scss'],
})
export class CounrtyCardComponent {
  @Input()
  country: Country;
}
