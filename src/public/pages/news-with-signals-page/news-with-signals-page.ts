import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { IResponseApi } from '../../interfaces/IResponseApi';
import { INews } from '../../interfaces/INews';
import { ConsigneNewsPagination } from "../../components/consigne-news-pagination/consigne-news-pagination";

@Component({
  selector: 'app-news-with-signals-page',
  imports: [ConsigneNewsPagination],
  templateUrl: './news-with-signals-page.html',
  styleUrl: './news-with-signals-page.css',
})
export class NewsWithSignalsPage implements OnInit {
  private service = inject(NewsService)

  intialLoad = { page: 1, perPage: 6 }

  respApi = signal<IResponseApi<INews>>({} as IResponseApi<INews>)

  ngOnInit(): void {
    this.loadNews(this.intialLoad.page, this.intialLoad.perPage)
  }

  loadNews(page: number, perPage: number) {
    this.service.getPaginateNews(page, perPage).subscribe({
      next: (resp) => this.respApi.set(resp),
      error: (e) => console.error(e)
    })
  }

}
