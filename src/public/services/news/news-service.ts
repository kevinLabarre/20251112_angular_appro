import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interfaces/INews';

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

  // getPaginateNews() {

  // }

}
