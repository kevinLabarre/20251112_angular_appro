import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ShareNewsService } from '../../services/shareNews/share-news-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-description',
  imports: [],
  templateUrl: './news-description.html',
  styleUrl: './news-description.css',
})
export class NewsDescription implements OnInit, OnDestroy {
  private shareService = inject(ShareNewsService)

  newsDescription = signal("")

  private subsciption = new Subscription()

  ngOnInit(): void {
    this.loadNews()
  }

  loadNews() {
    this.subsciption = this.shareService.news$.subscribe((resp) => this.newsDescription.set(resp.texte))
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe()
  }
}
