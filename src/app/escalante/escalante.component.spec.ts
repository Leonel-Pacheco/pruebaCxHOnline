import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalanteComponent } from './escalante.component';

describe('EscalanteComponent', () => {
  let component: EscalanteComponent;
  let fixture: ComponentFixture<EscalanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscalanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
