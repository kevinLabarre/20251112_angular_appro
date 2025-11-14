import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtons } from './pagination-buttons';

describe('PaginationButtons', () => {
  let component: PaginationButtons;
  let fixture: ComponentFixture<PaginationButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationButtons]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaginationButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the button number when button is clicked', () => {
    component.nbrButtons = 4
    component.ngOnInit()
    fixture.detectChanges()

    const button = fixture.nativeElement.querySelector('button')

    // Pour tester les envoies de données via les @Output
    let emittedData;
    component.handleClickEvent.subscribe((data) => emittedData = data)
    // _________________________________________________________________

    button.click()
    expect(Number(emittedData)).toBe(Number(button.textContent))
  })

  it('should display the correct number of buttons when use the @input', () => {
    // arrange
    const nbrButton = 4

    // act
    fixture.componentRef.setInput('nbrButtons', nbrButton) //nbrButtons est le nom de notre @Input côté composant
    component.ngOnInit()
    fixture.detectChanges()

    // expect
    const buttons = fixture.nativeElement.querySelectorAll('button')
    expect(component.nbrButtons).toBe(4) // Vérification que la valeur donnée à l'input est bien accessible (et à la bonne valeur)
    expect(buttons.length).toBe(4) // Vérification que le composant affiche bien le bon nombre de boutons, en fonctin de la donnée passée en @Input
  })
});
