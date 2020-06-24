import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { appRoutes } from "./rotas/app.routes";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { PrincipalComponent } from './inicio/principal/principal.component';
import { HomeComponent } from './home/home/home.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { ProdutoService } from './services/produto.service';
import { SubListaPipe } from './filtros/sub-lista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    HomeComponent,
    ProdutosComponent,
    NotFoundComponent,
    SubListaPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
