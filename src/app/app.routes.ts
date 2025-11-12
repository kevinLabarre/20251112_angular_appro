import { Routes } from '@angular/router';
import { HomePage } from '../public/pages/home-page/home-page';
import { AccountPage } from '../public/pages/account-page/account-page';
import { NewsPage } from '../public/pages/news-page/news-page';

export const routes: Routes = [
  { path: "", component: HomePage },
  { path: "comptes", component: AccountPage },
  { path: "actualites", component: NewsPage }
];
