import { Component, computed, input, output } from '@angular/core';


@Component({
  selector: 'app-pagination-buttons-with-new-syntax',
  imports: [],
  templateUrl: './pagination-buttons-with-new-syntax.html',
  styleUrl: './pagination-buttons-with-new-syntax.css',
})
export class PaginationButtonsWithNewSyntax {

  // nbrButtons = input(0) // Si non requis, il faut une valeur par défaut. On n'a pas besoin de définir explicitement un type,
  // le type de la valeur initial sera le type de notre input
  nbrButtons = input.required<number>(); // Avec les nouvelles 'input', on est sur des types 'signaux'
  handleClickEvent = output<number>();

  buttonsArray = computed(() => Array.from({ length: this.nbrButtons() }, (_, idx) => idx + 1))

  handleClick(buttonNbr: number) {
    this.handleClickEvent.emit(buttonNbr)
  }
}
