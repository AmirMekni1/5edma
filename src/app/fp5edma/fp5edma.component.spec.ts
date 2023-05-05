import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FP5edmaComponent } from './fp5edma.component';

describe('FP5edmaComponent', () => {
  let component: FP5edmaComponent;
  let fixture: ComponentFixture<FP5edmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FP5edmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FP5edmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
