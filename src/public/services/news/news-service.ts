import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';
import { IResponseApi } from '../../interfaces/IResponseApi';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient)

  newsUrl = "http://localhost:3000/actualites"

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.newsUrl)
  }

  get3News(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.newsUrl}?_limit=3`)
  }

  getPaginateNews(page: number, perPage: number): Observable<IResponseApi<INews>> {
    return this.http.get<IResponseApi<INews>>(`${this.newsUrl}?_page=${page}&_per_page=${perPage}`)
  }

}
