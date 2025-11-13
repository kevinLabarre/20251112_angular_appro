import { Routes } from "@angular/router";
import { PublicLayout } from "../public/public-layout/public-layout";
import { PUBLIC_ROUTES } from "../public/routes/public.routes";
import { AdminLayout } from "../admin/admin-layout/admin-layout";
import { ADMIN_ROUTES } from "../admin/routes/admin.routes";

export const routes: Routes = [
  { path: "", component: PublicLayout, children: PUBLIC_ROUTES },
  { path: "admin", component: AdminLayout, children: ADMIN_ROUTES }
];
