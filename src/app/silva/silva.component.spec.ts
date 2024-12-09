import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilvaComponent } from './silva.component';

describe('SilvaComponent', () => {
  let component: SilvaComponent;
  let fixture: ComponentFixture<SilvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
