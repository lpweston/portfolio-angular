import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerProjectsComponent } from './maker-projects.component';

describe('MakerProjectsComponent', () => {
  let component: MakerProjectsComponent;
  let fixture: ComponentFixture<MakerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
