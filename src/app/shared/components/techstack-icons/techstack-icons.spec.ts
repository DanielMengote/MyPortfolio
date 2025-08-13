import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackIcons } from './techstack-icons';

describe('TechstackIcons', () => {
  let component: TechstackIcons;
  let fixture: ComponentFixture<TechstackIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechstackIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
