import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'sublista'
})
export class SubListaPipe implements PipeTransform {

  transform(produtos: Produto[], input: string): Produto[] {
    if (!input) {
      return produtos;
    }
    return produtos.filter(p => p.descricao.toLowerCase().includes(input.toLowerCase()));
  }

}
