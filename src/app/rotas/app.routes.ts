import { Routes } from "@angular/router";
import { PrincipalComponent } from '../inicio/principal/principal.component';
import { HomeComponent } from '../home/home/home.component';
import { ProdutosComponent } from '../produtos/produtos/produtos.component';
import { NotFoundComponent } from '../erros/not-found/not-found.component';

//Na definição das rotas, primeiro colocamos as mais específicas, e
//as mais gerais, por último

export const appRoutes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "home", component: HomeComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "**", component: NotFoundComponent }
];
