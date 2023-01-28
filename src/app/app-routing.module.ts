import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  // Admin
  { path: 'admin/sucursales', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/lotes', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/clientes', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/aseguradoras', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/roles', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  { path: 'admin/usuarios', loadChildren: () => import('./modules/general/general-hub/general-hub.module').then(m => m.GeneralHubModule) },
  // TEXT
  { path: 'texto/hub', loadChildren: () => import('./modules/text/text-hub/text-hub.module').then(m => m.TextHubModule) },
  { path: 'texto/mayusculas', loadChildren: () => import('./modules/text/uppercase/uppercase.module').then(m => m.UppercaseModule) },
  { path: 'texto/minusculas', loadChildren: () => import('./modules/text/lowercase/lowercase.module').then(m => m.LowercaseModule) },
  { path: 'texto/invertido', loadChildren: () => import('./modules/text/invert/invert.module').then(m => m.InvertModule) },
  { path: 'texto/censurar', loadChildren: () => import('./modules/text/censorship/censorship.module').then(m => m.CensorshipModule) },
  // LISTAS
  { path: 'listas/hub', loadChildren: () => import('./modules/lists/lists-hub/lists-hub.module').then(m => m.ListsHubModule) },
  { path: 'listas/ordenar/alfabeticamente', loadChildren: () => import('./modules/lists/order-abc/order-abc.module').then(m => m.OrderAbcModule) },
  { path: 'listas/ordenar/alfabeticamente/invertido', loadChildren: () => import('./modules/lists/order-zyx/order-zyx.module').then(m => m.OrderZyxModule) },
  { path: 'listas/filtrar/repetidos', loadChildren: () => import('./modules/lists/delete-repeated/delete-repeated.module').then(m => m.DeleteRepeatedModule) },
  { path: 'listas/json', loadChildren: () => import('./modules/lists/make-json/make-json.module').then(m => m.MakeJsonModule) },
  // MATEMATICAS
  { path: 'matematicas/hub', loadChildren: () => import('./modules/math/math-hub/math-hub.module').then(m => m.MathHubModule) },
  { path: 'matematicas/sumar', loadChildren: () => import('./modules/math/addition/addition.module').then(m => m.AdditionModule) },
  { path: 'matematicas/valor/mayor', loadChildren: () => import('./modules/math/higher/higher.module').then(m => m.HigherModule) },
  { path: 'matematicas/valor/menor', loadChildren: () => import('./modules/math/lower/lower.module').then(m => m.LowerModule) },
  // ALEATORIO
  { path: 'aleatorio/hub', loadChildren: () => import('./modules/random/random-hub/random-hub.module').then(m => m.RandomHubModule) },
  { path: 'aleatorio/sorteo', loadChildren: () => import('./modules/random/lottery/lottery.module').then(m => m.LotteryModule) },
  { path: 'aleatorio/numero', loadChildren: () => import('./modules/random/random-number/random-number.module').then(m => m.RandomNumberModule) },
  { path: 'aleatorio/nombre/femenino', loadChildren: () => import('./modules/random/female/female.module').then(m => m.FemaleModule) },
  { path: 'aleatorio/nombre/masculino', loadChildren: () => import('./modules/random/male/male.module').then(m => m.MaleModule) },
  // EXTRAS
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
