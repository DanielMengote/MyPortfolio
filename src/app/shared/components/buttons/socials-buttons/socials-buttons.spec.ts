import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsButtons } from './socials-buttons';

describe('SocialsButtons', () => {
  let component: SocialsButtons;
  let fixture: ComponentFixture<SocialsButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
