import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaurenziComponent } from './maurenzi.component';

describe('MaurenziComponent', () => {
  let component: MaurenziComponent;
  let fixture: ComponentFixture<MaurenziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaurenziComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaurenziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
