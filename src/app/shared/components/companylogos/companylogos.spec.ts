import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companylogos } from './companylogos';

describe('Companylogos', () => {
  let component: Companylogos;
  let fixture: ComponentFixture<Companylogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Companylogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companylogos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
