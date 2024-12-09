import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuarezComponent } from './juarez.component';

describe('JuarezComponent', () => {
  let component: JuarezComponent;
  let fixture: ComponentFixture<JuarezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuarezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuarezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
