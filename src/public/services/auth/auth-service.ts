import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface loginResponse {
  token: string,
  email: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private router = inject(Router)

  jsonUrl = environment.jsonServerUrl

  auth(email: string, password: string): Observable<loginResponse> {
    return this.fakeAuth(email, password).pipe(
      // Operator tap --> permet déclencher des actions sans modifier le flux (on peut accéder à la réponse dans le tap)
      tap((resp) => {
        sessionStorage.setItem("myToken", resp.token)
        // localStorage.setItem("myToken", resp.token)

        this.router.navigate(["/admin"])
      })
    )
  }


  private fakeAuth(email: string, password: string): Observable<loginResponse> {
    return this.http.get<loginResponse>("http://localhost:3000/accounts").pipe(
      // map transformer le retour de la requête
      // Fonctionnement équivalent à la méthode .map()
      map(() => {
        if (email === "admin@admin" && password === "admin") {
          return { token: "myTokenFromFakeAuth", email: email }
        } else {
          throw new Error("Email ou mot de passe incorrect")
        }
      })
    )
  }

}
