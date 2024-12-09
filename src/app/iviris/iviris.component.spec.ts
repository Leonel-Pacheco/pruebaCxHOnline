import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvirisComponent } from './iviris.component';

describe('IvirisComponent', () => {
  let component: IvirisComponent;
  let fixture: ComponentFixture<IvirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvirisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
