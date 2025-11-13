import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ShareNewsService } from '../../services/shareNews/share-news-service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-news',
  imports: [ReactiveFormsModule],
  templateUrl: './update-news.html',
  styleUrl: './update-news.css',
})
export class UpdateNews implements OnInit, OnDestroy {
  shareService = inject(ShareNewsService)
  newsService = inject(NewsService)

  newsId = signal<number>(0)

  private subscription = new Subscription()

  ngOnInit(): void {
    this.loadNews()
  }

  loadNews() {
    this.subscription = this.shareService.news$.subscribe(resp => {
      this.newsForm.reset(resp)
      if (resp.id)
        this.newsId.set(resp.id)
    })
  }

  newsForm: FormGroup = new FormGroup({
    titre: new FormControl('', Validators.required),
    texte: new FormControl('', [Validators.required, Validators.minLength(10)]),
    categorie: new FormControl(''),
    image: new FormControl('')
  });

  onSubmit() {
    if (this.newsForm.valid) {
      const result: INews = {
        ...this.newsForm.value,
        id: this.newsId(),
        dateModification: new Date()
      }

      this.newsService.updateNews(result).subscribe({
        next: resp => this.shareService.shareNews(resp),
        error: e => console.error(e)
      })
    }
  }

  get titleError() {
    const error = this.newsForm.get('titre')!.errors

    if (error)
      return "Le titre est requis"
    else return null
  }

  get texteError() {
    const error = this.newsForm.get('texte')!.errors

    if (error) {
      // objet error si il y a erreur:
      //  erroObject = { required: true, minlength: {requiredLength: 10, actualLength: 1} }

      if (error['required']) {
        return "La description est requise"
      } else if (error['minlength']) {
        return `La description doit avoir au moins ${error['minlength'].requiredLength} caractères`
      } else return null
    }
    else return null
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
