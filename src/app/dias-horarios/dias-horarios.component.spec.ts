import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasHorariosComponent } from './dias-horarios.component';

describe('DiasHorariosComponent', () => {
  let component: DiasHorariosComponent;
  let fixture: ComponentFixture<DiasHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
