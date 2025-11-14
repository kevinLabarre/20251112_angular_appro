import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  private authService = inject(AuthService)

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.loginForm.valid) {
      const result: { password: string, email: string } = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }

      this.authService.auth(result.email, result.password).subscribe({
        error: () => { this.loginForm.reset() }
      })
    }
  }


  get emailError() {
    const control = this.loginForm.get('email')!
    const error = control.errors
    const touched = control.touched

    if (error && touched) {
      if (error['required']) {
        return "Email requis"
      } else if (error['email']) {
        return "Format mail non respecté"
      } else return null

    } else return null
  }

  get passwordError() {
    const control = this.loginForm.get('password')!
    const error = control.errors
    const touched = control.touched

    if (error && touched)
      return "Mot de passe requis"
    else return null
  }

}
