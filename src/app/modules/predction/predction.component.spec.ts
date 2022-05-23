import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredctionComponent } from './predction.component';

describe('PredctionComponent', () => {
  let component: PredctionComponent;
  let fixture: ComponentFixture<PredctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
