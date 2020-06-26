import { Routes } from "@angular/router";
import { PrincipalComponent } from '../inicio/principal/principal.component';
import { HomeComponent } from '../home/home/home.component';
import { ProdutosComponent } from '../produtos/produtos/produtos.component';
import { NotFoundComponent } from '../erros/not-found/not-found.component';
import { FornecedorHomeComponent } from '../fornecedores/fornecedor-home/fornecedor-home.component';
import { FornecedoresNovoComponent } from '../fornecedores/fornecedores-novo/fornecedores-novo.component';
import { FornecedoresAlteracaoComponent } from '../fornecedores/fornecedores-alteracao/fornecedores-alteracao.component';
import { FornecedoresRemocaoComponent } from '../fornecedores/fornecedores-remocao/fornecedores-remocao.component';

//Na definição das rotas, primeiro colocamos as mais específicas, e
//as mais gerais, por último

export const appRoutes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "home", component: HomeComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "fornecedores", component: FornecedorHomeComponent },
  { path: "fornecedores/novo", component: FornecedoresNovoComponent },
  { path: "fornecedores/alterar/:id", component: FornecedoresAlteracaoComponent },
  { path: "fornecedores/remover/:id", component: FornecedoresRemocaoComponent },
  { path: "**", component: NotFoundComponent }
];
