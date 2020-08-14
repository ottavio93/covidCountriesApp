import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounrtyCardComponent } from './counrty-card.component';

describe('CounrtyCardComponent', () => {
  let component: CounrtyCardComponent;
  let fixture: ComponentFixture<CounrtyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounrtyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounrtyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
