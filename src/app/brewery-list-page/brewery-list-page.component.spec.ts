import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListPageComponent } from './brewery-list-page.component';

describe('BreweryListPageComponent', () => {
  let component: BreweryListPageComponent;
  let fixture: ComponentFixture<BreweryListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
