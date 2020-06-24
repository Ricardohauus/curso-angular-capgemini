export class Produto {
  //propriedades : getters / setters

  //propriedade codigo
  private _codigo?: number;
  public get codigo(): number {
    return this._codigo;
  }
  public set codigo(v: number) {
    if (v <= 0) {
      throw new Error("Código inválido");
    }
    this._codigo = v;
  }

  //propriedade descricao
  private _descricao?: string;
  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(v: string) {
    this._descricao = v;
  }

  //propriedade unidade
  private _unidade?: string;
  public get unidade(): string {
    return this._unidade;
  }
  public set unidade(v: string) {
    if (v.length < 2 || v.length > 5) {
      throw new Error("A unidade deve ter entre 2 e 5 caracteres");
    }
    this._unidade = v;
  }

  //propriedade preco
  private _preco?: number;
  public get preco(): number {
    return this._preco;
  }
  public set preco(v: number) {
    this._preco = v;
  }

  //propriedade categoria
  private _categoria?: string;
  public get categoria(): string {
    return this._categoria;
  }
  public set categoria(v: string) {
    this._categoria = v;
  }

  private id?: string;

  public get _id(): string {
    return this.id;
  }
  public set _id(v: string) {
    this.id = v;
  }

  //método para receber os dados dos produtos
  // public setDados(cod, descr, unid, preco, cat): void {
  //     this.codigo = cod;
  //     this.descricao = descr;
  //     this.unidade = unid;
  //     this.preco = preco;
  //     this.categoria = cat;
  // }
}
