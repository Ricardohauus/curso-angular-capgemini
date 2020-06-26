import { Component, OnInit } from '@angular/core';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { FornecedoresInterface } from '../fornecedores-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-home',
  templateUrl: './fornecedor-home.component.html',
  styleUrls: ['./fornecedor-home.component.css']
})
export class FornecedorHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public novo() {
    this.router.navigate(['/fornecedores/novo'])
  }
}
