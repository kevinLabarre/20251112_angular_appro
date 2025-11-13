import { Routes } from "@angular/router";
import { AdminHomePage } from "../pages/admin-home-page/admin-home-page";
import { AdminAccountPage } from "../pages/admin-account-page/admin-account-page";

export const ADMIN_ROUTES: Routes = [
  { path: "", component: AdminHomePage, title: "Accueil" },
  { path: "comptes", component: AdminAccountPage, title: "comptes" },
]
