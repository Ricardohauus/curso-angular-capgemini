import { Component, OnInit } from '@angular/core';
import { FornecedoresInterface } from '../fornecedores-interface';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.css']
})
export class FornecedorListaComponent implements OnInit {

  constructor(private fornecedorService: FornecedoresServiceService) { }

  ngOnInit(): void {
    this.fornecedorService.getListaFornecedoresWS().subscribe(res => {
      this.fornecedores = res;
    })
  }
  public fornecedores: FornecedoresInterface[];


}
