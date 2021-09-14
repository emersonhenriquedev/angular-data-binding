import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  imageUrl : string = 'http://lorempixel.com/400/200/sports/';
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nome: string = "abc";
  pessoa: any = {
    nome: 'def',
    idade: 20
  };
  nomeDoCurso: string = "Curso de angular";
  valorInicial: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 3;
  }

  botaoClick() {
    alert('botao click')    
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver =!this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
