import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos() {
    return [
      {
        id: 1,
        id_produto_subgrupo: 1,
        id_produto_marca: 1,
        id_produto_unidade: 1,
        nome: 'Fit',
        gtin: '12345678901234',
        valor: 30.000,
        data_cadastro: new Date('2022-01-01')
      },
      {
        id: 2,
        id_produto_subgrupo: 2,
        id_produto_marca: 2,
        id_produto_unidade: 2,
        nome: 'Civic',
        gtin: '23456789012345',
        valor: 50.000,
        data_cadastro: new Date('2023-02-01')
      }
    ];
  }
}
