import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdemandeComponent } from './ajouterdemande.component';

describe('AjouterdemandeComponent', () => {
  let component: AjouterdemandeComponent;
  let fixture: ComponentFixture<AjouterdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterdemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
