import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [HeaderUserComponent, RouterOutlet],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.css'
})
export class HomeWrapperComponent {

}
