import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const injectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  // req est La requête Http interceptée
  // next est la fonction qui permet de passer 'au suivant'
  console.log("Requête interceptée: ", req);

  const platform = inject(PLATFORM_ID)

  // if (isPlatformServer(platform))
  if (isPlatformBrowser(platform)) {
    const token = sessionStorage.getItem("myToken")

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }

  return next(req);
};
