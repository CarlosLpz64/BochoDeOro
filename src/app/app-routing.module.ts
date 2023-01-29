import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'login', loadChildren: () => import('./modules/general/login/login.module').then(m => m.LoginModule) },
  // Admin
  { path: 'admin/sucursales', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/lotes', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/clientes', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/aseguradoras', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/roles', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/usuarios', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  // PERSONAL
  { path: 'personal/clientes', loadChildren: () => import('./modules/general/decrypt/decrypt.module').then(m => m.DecryptModule) },
  { path: 'personal/seguros', loadChildren: () => import('./modules/general/encrypt/encrypt.module').then(m => m.EncryptModule) },
  { path: 'personal/cliente/vehiculos', loadChildren: () => import('./modules/general/from-base64/from-base64.module').then(m => m.FromBase64Module) },
  { path: 'personal/lotes', loadChildren: () => import('./modules/general/to-base64/to-base64.module').then(m => m.ToBase64Module) },
  { path: 'personal/lotes/vehiculos', loadChildren: () => import('./modules/general/number-to-words/number-to-words.module').then(m => m.NumberToWordsModule) },
  // EXTRAS
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
