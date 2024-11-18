import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BountypageComponent } from './bountypage.component';

describe('BountypageComponent', () => {
  let component: BountypageComponent;
  let fixture: ComponentFixture<BountypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BountypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BountypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
