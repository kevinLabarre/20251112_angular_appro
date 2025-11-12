import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList {

  @Input({ required: true }) newsList!: INews[]

}
