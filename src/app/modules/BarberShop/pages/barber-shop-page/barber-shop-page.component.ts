import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';

@Component({
  selector: 'app-barber-shop-page',
  standalone: true,
  imports: [CommonModule,HeaderUserComponent],
  templateUrl: './barber-shop-page.component.html',
  styleUrl: './barber-shop-page.component.css'
})
export class BarberShopPageComponent {

}
