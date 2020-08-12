import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BREWERIEComponent } from './brewerie.component';

describe('BREWERIEComponent', () => {
  let component: BREWERIEComponent;
  let fixture: ComponentFixture<BREWERIEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BREWERIEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BREWERIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
