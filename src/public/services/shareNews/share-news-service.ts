import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INews } from '../../interfaces/INews';

@Injectable({
  providedIn: 'root',
})
export class ShareNewsService {
  private news = new BehaviorSubject<INews>({} as INews)

  news$ = this.news.asObservable()

  shareNews(news: INews) {
    this.news.next(news)
  }

}
