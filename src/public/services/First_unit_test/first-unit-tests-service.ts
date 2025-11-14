import { Injectable } from '@angular/core';
import { NewsService } from '../news/news-service';
import { INews } from '../../interfaces/INews';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstUnitTestsService {

  constructor(private newsService: NewsService) { }

  add(a: number, b: number): number {
    return a + b
  }

  getNews(): Observable<INews[]> {
    // Traitement

    return this.newsService.getNews()
  }

}
