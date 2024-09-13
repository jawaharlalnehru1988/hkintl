import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkadasiComponent } from './ekadasi.component';

describe('EkadasiComponent', () => {
  let component: EkadasiComponent;
  let fixture: ComponentFixture<EkadasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkadasiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkadasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
