import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  imports: [],
  templateUrl: './pagination-buttons.html',
  styleUrl: './pagination-buttons.css',
})
export class PaginationButtons implements OnInit {
  @Input({ required: true }) nbrButtons!: number // Nombre de boutons à afficher

  @Output() handleClickEvent = new EventEmitter<number>()

  buttonsArray?: number[]

  // ATTENTION : pour accéder aux valeurs des @input au chargement du composant, je dois utiliser le onInit !
  // Si je fais la même dans le constructor OU directement dans la class, les inputs n'auront pas encore la valeur donnée par le composant parent
  ngOnInit(): void {
    // si nbrButtons est égal à 4, on veut le tableau suivant = [1,2,3,4]
    this.buttonsArray = Array.from({ length: this.nbrButtons }, (_, idx) => idx + 1)
  }

  handleClick(buttonNbr: number) {
    this.handleClickEvent.emit(buttonNbr)
  }

}
