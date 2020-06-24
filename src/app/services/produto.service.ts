import { Injectable } from '@angular/core';
import { Produto } from '../classes/produto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) {

  }
  url: string = 'http://localhost:3400/ws/produtos';

  public getListaProdutoWS() {
    return this.http.get<Produto[]>(this.url);
  }

  public setNovoProduto(produto: Produto) {
    return this.http.post(this.url, produto);
  }
  public setAtualizaProduto(produto: Produto) {
    return this.http.put(`${this.url}/${produto._id}`, produto);
  }

  public setDeletarProduto(produto: Produto) {
    return this.http.delete(`${this.url}/${produto._id}`);
  }

  public getListaProdutos(): Produto[] {

    return [

    ]
  }
}
