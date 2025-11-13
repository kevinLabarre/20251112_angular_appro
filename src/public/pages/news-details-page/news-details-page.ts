import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { NewsCard } from "../../components/news-card/news-card";
import { ShareNewsService } from '../../services/share-news-service';

@Component({
  selector: 'app-news-details-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NewsCard],
  templateUrl: './news-details-page.html',
  styleUrl: './news-details-page.css',
})
export class NewsDetailsPage {

  news = signal<INews>({} as INews)

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService,
    private shareService: ShareNewsService
  ) {
    this.activatedRoute.params.subscribe((params) => this.loadNews(params['id']))
  }

  loadNews(id: number) {
    this.service.getNewsById(id).subscribe({
      next: resp => {
        this.news.set(resp)
        this.shareService.shareNews(resp)
      },
      error: e => console.error(e)
    })
  }

}
