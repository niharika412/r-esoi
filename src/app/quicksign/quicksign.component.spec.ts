import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksignComponent } from './quicksign.component';

describe('QuicksignComponent', () => {
  let component: QuicksignComponent;
  let fixture: ComponentFixture<QuicksignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicksignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
