import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'O Amor Não É Obvio', price: 30.00, description: 'Por Elayne Baeta', image: './amornaoobvio.png'},
    { id: 2, name: 'É Assim Que Começa', price: 34.50, description: 'Por Collen Hoover', image: './assimcomeca.png' },
    { id: 3, name: 'Como Eu Era Antes De Você', price: 22.50, description: 'Por Jojo Moyes', image: './comoeraantes.png'},
    { id: 4, name: 'Eu E Esse Meu Coração', price: 27.00, description: 'Por C. C. Hunter', image: './essecoracao.png' },
    { id: 5, name: 'Os Sete Maridos De Evelyn Hugo', price: 32.50, description: 'Por Taylor Jenkins Reid', image: './evelynhugo.png' },
    { id: 6, name: 'Hipotese do Amor', price: 39.50, description: 'Por Ali Hazewood', image: './hipoteseamor.png' },
    { id: 7, name: 'Mil Beijos De Garotos', price: 20.00, description: 'Por Tillie Cole', image: './milbeijos.png' },
    { id: 8, name: 'A Seleção', price: 27.50, description: 'Por Kiera Cass', image: './selecao.png' },
    { id: 9, name: 'Todo Esse Tempo', price: 36.00, description: 'Por Rachel Lippincott', image: './todotempo.png' },
    { id: 10, name: 'Vermelho, Branco e Sangue Azul', price: 26.00, description: 'Por Casey McQuiston', image: './vbsa.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
