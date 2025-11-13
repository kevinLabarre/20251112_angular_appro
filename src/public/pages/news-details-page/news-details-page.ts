import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { NewsCard } from "../../components/news-card/news-card";
import { ShareNewsService } from '../../services/shareNews/share-news-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-details-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NewsCard],
  templateUrl: './news-details-page.html',
  styleUrl: './news-details-page.css',
})
export class NewsDetailsPage implements OnDestroy {

  news = signal<INews>({} as INews)

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NewsService,
    private shareService: ShareNewsService
  ) {
    this.activatedRoute.params.subscribe((params) => this.loadNews(params['id']))
    this.subscription = this.shareService.news$.subscribe((resp) => this.news.set(resp))
  }

  private subscription = new Subscription()

  loadNews(id: number) {
    this.service.getNewsById(id).subscribe({
      next: resp => {
        this.shareService.shareNews(resp)
      },
      error: e => console.error(e)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
