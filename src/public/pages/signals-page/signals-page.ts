import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-page',
  imports: [],
  templateUrl: './signals-page.html',
  styleUrl: './signals-page.css',
})
export class SignalsPage {

  // 1. Compteurs classiques (non zoneless)
  count = 0;

  handleAdd() {
    this.count++
  }

  handleSub() {
    this.count--
  }

  handleReset() {
    this.count = 0
  }

  // _________________________________________________

  // 2. Compteurs avec signaux (zoneless)

  countSignal = signal(0);

  handleAdd_withSignal() {
    this.countSignal.update((prev) => prev + 1)
  }

  handleSub_withSignal() {
    this.countSignal.update((prev) => prev - 1)
  }

  handleReset_withSignal() {
    this.countSignal.set(0)
  }

  // _________________________________________________

  // 3. Les métodes computed() et effect()

  // le calcul de countCarree sera relancé à chaque changement d'un des signaux utilisés dans le computed
  //  --> dans notre cas, quand this.countSignal() change de valeur, notre methode de calcul est relancé
  countCarree = computed(() => this.countSignal() * this.countSignal())

  // le effect() sera relancé à chaque changement d'un des signaux utilisés à l'intérieur du effect()
  //  --> dans notre cas, quand this.countSignal() change de valeur, notre effect() est relancé
  constructor() {
    effect(() => document.title = "count : " + this.countSignal())
  }

}
