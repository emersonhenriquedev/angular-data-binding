import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input()
  valor: number = 0;
  
  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  // campoValorInput: ElementRef;
  campoValorInput: any;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(): void {
    console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
