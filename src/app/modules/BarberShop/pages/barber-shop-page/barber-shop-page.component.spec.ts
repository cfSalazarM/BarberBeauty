import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberShopPageComponent } from './barber-shop-page.component';

describe('BarberShopPageComponent', () => {
  let component: BarberShopPageComponent;
  let fixture: ComponentFixture<BarberShopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberShopPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
