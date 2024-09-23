import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent {
  @Input() isLoggedIn= false;

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth']);
  }
  goToHomePrincipal() {
    this.router.navigate(['']);
  }
}
