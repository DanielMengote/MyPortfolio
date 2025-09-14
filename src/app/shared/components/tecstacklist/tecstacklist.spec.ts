import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecstacklist } from './tecstacklist';

describe('Tecstacklist', () => {
  let component: Tecstacklist;
  let fixture: ComponentFixture<Tecstacklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecstacklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tecstacklist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
