import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { BankPresentation } from "../../components/bank-presentation/bank-presentation";
import { NewsList } from "../../components/news-list/news-list";
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-home-page',
  imports: [BankPresentation, NewsList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {

  // constructor(private newsService: NewsService) { }
  private newsService = inject(NewsService)

  news?: INews[]

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (resp) => this.news = resp,
      error: (e) => console.error(e),
      complete: () => console.log('get complete')
    })
  }

}
