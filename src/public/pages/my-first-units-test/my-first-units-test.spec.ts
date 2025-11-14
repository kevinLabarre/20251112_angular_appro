import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstUnitsTest } from './my-first-units-test';

describe('MyFirstUnitsTest', () => {
  let component: MyFirstUnitsTest;
  let fixture: ComponentFixture<MyFirstUnitsTest>;

  // Le beforeEach est une méthode qui s'execute avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstUnitsTest]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFirstUnitsTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Scénario pour tester que le titre présent dans le ts s'affiche
  // correctement sur le navigateur
  it('should have the correct title', () => {
    // Arrrange
    // const titleElement = fixture.nativeElement.querySelector('h2')
    const titleElement = fixture.nativeElement.querySelector('#titleId')
    const h2Content = titleElement.textContent;

    // assert
    expect(h2Content).toBe("Liste des utilisateurs")

  })


  it('should add a user to the list when the button is clicked', () => {
    // Arrange
    const button = fixture.nativeElement.querySelector('button')


    // act
    button.click()
    fixture.detectChanges(); // Pour mettre à jour la vue (ce qui est affiché sur le navigateur) suite au click

    // assert
    const list = fixture.nativeElement.querySelectorAll('#userList > li') // On récupère tous les <li> présent dans notre élément d'id 'userList'
    expect(list[list.length - 1].textContent).toBe('Nouvel utilisateur')
    expect(list.length).toBe(3)
  })
});
