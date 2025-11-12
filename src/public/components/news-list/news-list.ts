import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { NewsCard } from "../news-card/news-card";

@Component({
  selector: 'app-news-list',
  imports: [NewsCard],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList {

  @Input({ required: true }) newsList!: INews[]

}
