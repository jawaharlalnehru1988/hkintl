import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagavadgitaComponent } from './bhagavadgita.component';

describe('BhagavadgitaComponent', () => {
  let component: BhagavadgitaComponent;
  let fixture: ComponentFixture<BhagavadgitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhagavadgitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BhagavadgitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
