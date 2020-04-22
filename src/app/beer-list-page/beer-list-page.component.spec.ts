import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListPageComponent } from './beer-list-page.component';

describe('BeerListPageComponent', () => {
  let component: BeerListPageComponent;
  let fixture: ComponentFixture<BeerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
