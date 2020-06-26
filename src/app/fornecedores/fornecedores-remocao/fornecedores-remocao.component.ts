import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { FornecedoresInterface } from '../fornecedores-interface';

@Component({
  selector: 'app-fornecedores-remocao',
  templateUrl: './fornecedores-remocao.component.html',
  styleUrls: ['./fornecedores-remocao.component.css']
})
export class FornecedoresRemocaoComponent implements OnInit {

  constructor(private service: FornecedoresServiceService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.params.id;
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getFornecedorId(id).subscribe(res => {
      this.fornecedor = res;

    })
  }

  fornecedor: FornecedoresInterface = { nome: '', cnpj: '', email: '', dataCadastro: '', endereco: '' };

  public remover() {
    if (window.confirm('Tem certeza que deseja excluir o Fornecedor ?')) {
      this.service.setDeleteFornecedorWS(this.fornecedor).subscribe(() => {
        this.router.navigate(['/fornecedores'])
      })
    }
  }
}
