import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { IResponseApi } from '../../interfaces/IResponseApi';
import { INews } from '../../interfaces/INews';
import { NewsList } from "../../components/news-list/news-list";
import { ConsigneNewsPagination } from "../../components/consigne-news-pagination/consigne-news-pagination";

@Component({
  selector: 'app-news-page',
  imports: [NewsList, ConsigneNewsPagination],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css',
})
export class NewsPage implements OnInit {
  private service = inject(NewsService)

  intialLoad = { page: 1, perPage: 6 }

  respApi?: IResponseApi<INews>

  ngOnInit(): void {
    this.loadNews(this.intialLoad.page, this.intialLoad.perPage)
  }

  loadNews(page: number, perPage: number) {
    this.service.getPaginateNews(page, perPage).subscribe({
      next: (resp) => this.respApi = resp,
      error: (e) => console.error(e)
    })
  }

  handlePrev() {
    if (this.respApi) {
      if (this.respApi.prev)
        this.loadNews(this.respApi.prev, this.intialLoad.perPage)
    }
  }

  handleNext() {
    if (this.respApi) {
      this.respApi.next && this.loadNews(this.respApi.next, this.intialLoad.perPage)
    }
  }

  get pageNbr() {
    if (this.respApi) {
      return this.respApi.prev ? this.respApi.prev + 1 : 1 // Si prev est null --> on est sur la page 1
      // return this.respApi.prev ? this.respApi.prev + 1 : this.respApi.next! - 1
    }
    return
  }


}
