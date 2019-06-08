import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegprofComponent } from './regprof.component';

describe('RegprofComponent', () => {
  let component: RegprofComponent;
  let fixture: ComponentFixture<RegprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
