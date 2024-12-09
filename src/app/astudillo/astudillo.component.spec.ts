import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstudilloComponent } from './astudillo.component';

describe('AstudilloComponent', () => {
  let component: AstudilloComponent;
  let fixture: ComponentFixture<AstudilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstudilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstudilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
