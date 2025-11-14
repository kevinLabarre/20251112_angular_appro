import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNews } from './update-news';
import { ShareNewsService } from '../../services/shareNews/share-news-service';
import { Observable, of } from 'rxjs';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';

const initialNews: INews = {
  id: 2,
  categorie: "Sécurité",
  titre: "Nouveau système de sécurité : votre argent est si bien caché que même nous ne savons pas où il est",
  texte: "FakeBank est fière d'annoncer son nouveau protocole de sécurité révolutionnaire. Votre argent est désormais si bien protégé que même nos comptables ne peuvent pas le trouver. Nous appelons cela 'la sécurité par confusion totale.",
  datePublication: new Date(),
  dateModification: null,
  image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=800"
}

const initialNewsList$: Observable<INews> = of(initialNews)


describe('UpdateNews', () => {
  let component: UpdateNews;
  let fixture: ComponentFixture<UpdateNews>;
  let mockShareService: jasmine.SpyObj<ShareNewsService>;
  let mockNewsService: jasmine.SpyObj<NewsService>;

  beforeEach(async () => {

    // Création du mock pour ShareNewsService
    mockShareService = jasmine.createSpyObj<ShareNewsService>('ShareNewsService', ['shareNews']);
    // Ajout manuel de la propriété news$ comme un Observable
    Object.defineProperty(mockShareService, 'news$', { value: initialNewsList$ }); // of permet de créer un observable

    // Création du mock pour NewsService
    mockNewsService = jasmine.createSpyObj<NewsService>(['updateNews']);

    await TestBed.configureTestingModule({
      imports: [UpdateNews],
      providers: [
        { provide: ShareNewsService, useValue: mockShareService },
        { provide: NewsService, useValue: mockNewsService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be pre-filling the form', () => {
    const inputs = fixture.nativeElement.querySelectorAll('input');

    const [input1, input2, input3, input4] = inputs // équivalent du code ci-dessous
    // const input1 = inputs[0];
    // const input2 = inputs[1];
    // const input3 = inputs[2];
    // const input4 = inputs[3];

    expect(input1.value).toBe(initialNews.titre)
    expect(input2.value).toBe(initialNews.texte)
    expect(input3.value).toBe(initialNews.categorie)
    expect(input4.value).toBe(initialNews.image)
  })

  it('should be update the news', () => {
    const inputs = fixture.nativeElement.querySelectorAll('input');
    mockNewsService.updateNews.and.returnValue(initialNewsList$)
    mockShareService.shareNews // Pour les fonctions qui n'ont pas de return
    const button = fixture.nativeElement.querySelector('button')

    const [input1, input2, input3, input4] = inputs
    input1.value = "Nouveau titre"
    input2.value = "Nouvelle description"
    input3.value = "Nouvelle catégorie"
    input4.value = "Nouvelle adresse de l'image"

    // Simuler les événements input pour mettre à jour le formulaire Angular
    input1.dispatchEvent(new Event('input'));
    input2.dispatchEvent(new Event('input'));
    input3.dispatchEvent(new Event('input'));
    input4.dispatchEvent(new Event('input'));
    button.click()

    fixture.detectChanges()

    const resultForm: INews = {
      id: initialNews.id,
      categorie: "Nouvelle catégorie",
      titre: "Nouveau titre",
      texte: "Nouvelle description",
      datePublication: initialNews.datePublication,
      dateModification: new Date(),
      image: "Nouvelle adresse de l'image"
    }

    // Vérification que les deux fonctions updateNews et shareNews ont bien été appelées
    expect(mockNewsService.updateNews).toHaveBeenCalledWith(resultForm)
    expect(mockShareService.shareNews).toHaveBeenCalled()
  })
});
