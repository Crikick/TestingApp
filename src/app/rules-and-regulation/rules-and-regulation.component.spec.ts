import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndRegulationComponent } from './rules-and-regulation.component';

describe('RulesAndRegulationComponent', () => {
  let component: RulesAndRegulationComponent;
  let fixture: ComponentFixture<RulesAndRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAndRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
