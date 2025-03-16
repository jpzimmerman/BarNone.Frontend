import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollfordrinkComponent } from './rollfordrink.component';

describe('RollfordrinkComponent', () => {
  let component: RollfordrinkComponent;
  let fixture: ComponentFixture<RollfordrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollfordrinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollfordrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
