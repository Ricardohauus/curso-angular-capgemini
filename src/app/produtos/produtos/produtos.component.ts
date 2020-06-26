import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/classes/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutoService]
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    //this.produtos = this.produtosService.getListaProdutos();
    this.produtosService.getListaProdutoWS().subscribe(res => this.produtos = res)
  }

  //para um produto selecionado
  public produtoSelecionado: Produto;

  public selecionar(item: Produto): void {
    this.produtoSelecionado = item;
  }


  private novoProduto: Produto;

  public novo() {
    this.novoProduto = { _id: null, codigo: 0, descricao: '', unidade: '', preco: 0, categoria: '' }
    this.produtoSelecionado = this.novoProduto;
  }

  public incluir(produto: Produto) {
    produto._id ? this.produtosService.setAtualizaProduto(produto).subscribe(res => {
      this.produtosService.getListaProdutoWS().subscribe(res => {
        this.produtos = res;
        alert('Produto atualizado com sucesso!')
      });
    }) :
      this.produtosService.setNovoProduto(produto).subscribe(res => {
        this.produtosService.getListaProdutoWS().subscribe(res => {
          this.produtos = res;
          alert('Produto incluido com sucesso!')
        });
      })


  }
  public deletar(produto: Produto) {
    if (window.confirm('Tem certeza que deseja remover?')) {
      this.produtosService.setDeletarProduto(produto).subscribe(() => {
        this.produtosService.getListaProdutoWS().subscribe(res => {
          this.produtos = res;
          alert('Produto excluido com sucesso!')
        });
      });
    }
  }

  //defindo uma lista de produtos com instancias da classe
  //para comentar a seleção, CTRL + ;

  // p1: Produto = new Produto();
  // p2: Produto = new Produto();

  // public listarProdutos() {

  //   this.p1.setDados(10, 'Tablet', 'pc', 500.0, 'INFORMATICA')
  //   this.p2.setDados(20, 'Camisa', 'pc', 50.0, 'VESTUARIO')

  //   this.produtos.push(this.p1);
  //   this.produtos.push(this.p2);
  // }

  //definindo uma lista de produtos com o formato de objeto JSON


}
