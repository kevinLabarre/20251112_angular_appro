import { Routes } from '@angular/router';
import { HomePage } from '../public/pages/home-page/home-page';
import { AccountPage } from '../public/pages/account-page/account-page';
import { NewsPage } from '../public/pages/news-page/news-page';
import { SignalsPage } from '../public/pages/signals-page/signals-page';
import { NewsWithSignalsPage } from '../public/pages/news-with-signals-page/news-with-signals-page';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  { path: "comptes", component: AccountPage, title: "comptes" },
  { path: "actualites", component: NewsPage, title: "nos actualités" },
  { path: "signaux-demo", component: SignalsPage, title: "Démo: les signaux" },
  { path: "actualites-avec-signaux", component: NewsWithSignalsPage, title: "nos actualités, avec signaux" }
];
