import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) news!: INews
}
