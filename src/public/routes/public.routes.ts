import { Routes } from "@angular/router";
import { HomePage } from "../pages/home-page/home-page";
import { AccountPage } from "../pages/account-page/account-page";
import { NewsPage } from "../pages/news-page/news-page";
import { SignalsPage } from "../pages/signals-page/signals-page";
import { NewsWithSignalsPage } from "../pages/news-with-signals-page/news-with-signals-page";
import { NewsDetailsPage } from "../pages/news-details-page/news-details-page";
import { UpdateNews } from "../components/update-news/update-news";
import { NewsDescription } from "../components/news-description/news-description";
import { NewsDevis } from "../components/news-devis/news-devis";

export const PUBLIC_ROUTES: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  { path: "comptes", component: AccountPage, title: "comptes" },
  { path: "actualites", component: NewsPage, title: "nos actualités" },
  { path: "signaux-demo", component: SignalsPage, title: "Démo: les signaux" },
  { path: "actualites-avec-signaux", component: NewsWithSignalsPage, title: "nos actualités, avec signaux" },
  {
    path: "actualite-detail/:id", component: NewsDetailsPage, title: "Détails actualités", children: [
      { path: "", redirectTo: "mise-a-jour", pathMatch: "full" },
      { path: "mise-a-jour", component: UpdateNews, title: "mise à jour de l'actualité" },
      { path: "description", component: NewsDescription, title: "Description de l'actualité" },
      { path: "devis", component: NewsDevis, title: "Devis de l'actualité" }
    ]
  },

  // Si on a des changements de noms au niveau des routes, sur des routes partagés à des utilisateurs, on peut utiliser de redirectTo
  { path: "account", redirectTo: "comptes", pathMatch: "full" }
];
