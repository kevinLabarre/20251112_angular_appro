import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';
import { IResponseApi } from '../../interfaces/IResponseApi';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient)

  jsonServer_url = environment.jsonServerUrl

  newsUrl = `${this.jsonServer_url}/actualites`

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.newsUrl)
  }

  get3News(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.newsUrl}?_limit=3`)
  }

  getPaginateNews(page: number, perPage: number): Observable<IResponseApi<INews>> {
    return this.http.get<IResponseApi<INews>>(`${this.newsUrl}?_page=${page}&_per_page=${perPage}`)
  }

  getNewsById(id: number): Observable<INews> {
    return this.http.get<INews>(`${this.newsUrl}/${id}`)
  }

  updateNews(newsToUpdate: INews): Observable<INews> {
    if (newsToUpdate.id)
      return this.http.put<INews>(`${this.newsUrl}/${newsToUpdate.id}`, newsToUpdate)
    else throw new Error("L'actualité n'a pas d'id. On a besoin de l'id pour les mises à jours")
  }

}
