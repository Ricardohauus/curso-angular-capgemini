import { Component, OnInit } from '@angular/core';
import { FornecedoresInterface } from '../fornecedores-interface';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-novo',
  templateUrl: './fornecedores-novo.component.html',
  styleUrls: ['./fornecedores-novo.component.css']
})
export class FornecedoresNovoComponent implements OnInit {

  constructor(private fornecedorService: FornecedoresServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  fornecedor: FornecedoresInterface = { nome: '', cnpj: '', email: '', dataCadastro: Date.now().toString(), endereco: '' };

  public salvar() {
    this.fornecedorService.setNovoFornecedorWS(this.fornecedor).subscribe(() => {
      this.router.navigate(['/fornecedores'])
    });
  }

  public excluir() {
    this.fornecedorService.setDeleteFornecedorWS(this.fornecedor).subscribe(() => {
      this.router.navigate(['/fornecedores'])
    })
  }

}
