import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneshotComponent } from './oneshot.component';

describe('OneshotComponent', () => {
  let component: OneshotComponent;
  let fixture: ComponentFixture<OneshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneshotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
