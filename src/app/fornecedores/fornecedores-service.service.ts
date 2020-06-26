import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FornecedoresInterface } from './fornecedores-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresServiceService {

  constructor(private http: HttpClient) {
  }
  url: string = 'http://localhost:3400/ws/fornecedores';

  public getListaFornecedoresWS() {
    return this.http.get<FornecedoresInterface[]>(this.url);
  }
  public getFornecedorId(id: string): Observable<FornecedoresInterface> {
    const urlGet = `${this.url}/${id}`
    return this.http.get<FornecedoresInterface>(urlGet);
  }

  public setNovoFornecedorWS(fornecedor: FornecedoresInterface) {
    return this.http.post<FornecedoresInterface>(this.url, fornecedor);
  }
  public setAtualizaFornecedorWS(fornecedor: FornecedoresInterface) {
    return this.http.put<FornecedoresInterface>(`${this.url}/${fornecedor._id}`, fornecedor);
  }
  public setDeleteFornecedorWS(fornecedor: FornecedoresInterface) {
    return this.http.delete<FornecedoresInterface>(`${this.url}/${fornecedor._id}`);
  }

}
