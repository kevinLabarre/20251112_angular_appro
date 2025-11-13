import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { IResponseApi } from '../../interfaces/IResponseApi';
import { INews } from '../../interfaces/INews';
import { ConsigneNewsPagination } from "../../components/consigne-news-pagination/consigne-news-pagination";
import { NewsList } from "../../components/news-list/news-list";
import { PaginationButtons } from "../../components/pagination-buttons/pagination-buttons";
import { PaginationButtonsWithNewSyntax } from "../../components/pagination-buttons-with-new-syntax/pagination-buttons-with-new-syntax";

@Component({
  selector: 'app-news-with-signals-page',
  imports: [ConsigneNewsPagination, NewsList, PaginationButtons, PaginationButtonsWithNewSyntax],
  templateUrl: './news-with-signals-page.html',
  styleUrl: './news-with-signals-page.css',
})
export class NewsWithSignalsPage {
  private service = inject(NewsService)

  constructor() {
    effect(() => {
      // Notre effect se relance à chaque changement de la valeur du signal 'paginationManagement()'
      //  car le signal est utilisé dans la méthode loadNews()

      this.loadNews()
    })
  }

  paginationManagement = signal({ page: 1, perPage: 6 })

  respApi = signal<IResponseApi<INews>>({} as IResponseApi<INews>)

  loadNews() {
    this.service.getPaginateNews(this.paginationManagement().page, this.paginationManagement().perPage).subscribe({
      next: (resp) => this.respApi.set(resp),
      error: (e) => console.error(e)
    })
  }

  handleNav(pageNbr: number) {
    this.paginationManagement.update((prev) => ({ ...prev, page: pageNbr }))
  }

  handlePrev() {
    if (this.respApi().prev) {
      this.handleNav(this.respApi().prev!)
    }
  }

  handleNext() {
    if (this.respApi().next) {
      this.handleNav(this.respApi().next!)
    }
  }

  get pageNbr() {
    return this.respApi().prev ? this.respApi().prev! + 1 : 1
  }

  // Fonction qui sera passée à notre composant enfant 'PaginationButtons'.
  // --> Objectif: récupérer le numéro du bouton sur lequel on clique
  handlePaginationButton(buttonNbr: number) {
    this.handleNav(buttonNbr)
  }

}
