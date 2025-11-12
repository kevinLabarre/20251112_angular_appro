import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { IResponseApi } from '../../interfaces/IResponseApi';
import { INews } from '../../interfaces/INews';
import { NewsList } from "../../components/news-list/news-list";

@Component({
  selector: 'app-news-page',
  imports: [NewsList],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css',
})
export class NewsPage implements OnInit {
  private service = inject(NewsService)

  intialLoad = { page: 1, perPage: 10 }

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
    console.log('prev')
  }

  handleNext() {
    console.log('next')
  }

}
