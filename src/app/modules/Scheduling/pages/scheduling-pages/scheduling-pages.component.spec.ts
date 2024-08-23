import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingPagesComponent } from './scheduling-pages.component';

describe('SchedulingPagesComponent', () => {
  let component: SchedulingPagesComponent;
  let fixture: ComponentFixture<SchedulingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulingPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
