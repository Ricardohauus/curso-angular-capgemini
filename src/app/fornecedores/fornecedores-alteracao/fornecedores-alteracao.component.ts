import { Component, OnInit } from '@angular/core';
import { FornecedoresInterface } from '../fornecedores-interface';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

moment.locale('pt-BR');

@Component({
  selector: 'app-fornecedores-alteracao',
  templateUrl: './fornecedores-alteracao.component.html',
  styleUrls: ['./fornecedores-alteracao.component.css']
})
export class FornecedoresAlteracaoComponent implements OnInit {

  constructor(private service: FornecedoresServiceService,
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    //const id = this.route.snapshot.params.id;
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getFornecedorId(id).subscribe(res => {
      this.fornecedor = res;
      this.fornecedor.dataCadastro = moment(res.dataCadastro).format('YYYY-MM-DD')
    })
  }

  fornecedor: FornecedoresInterface = { nome: '', cnpj: '', email: '', dataCadastro: '', endereco: '' };

  public atualizar() {
    this.service.setAtualizaFornecedorWS(this.fornecedor).subscribe(() => {
      this.router.navigate(['/fornecedores'])
    })
  }
}
