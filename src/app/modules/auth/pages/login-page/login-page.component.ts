import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, HeaderUserComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
