import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 10;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue:number ){
   console.log(newValue);

   let elemHTML = document.getElementsByName('progreso')[0];

    if(newValue >= 100){
      this.progreso = 100;
    }else if( newValue <= 0 ){
      this.progreso = 0
    }else{
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

   this.cambioValor.emit( this.progreso )
  
  }

  cambiarValor(val:number){

    if( (this.progreso >= 100 && val > 0) || (this.progreso <= 0 && val < 0) ){
      return;
    }
    this.progreso += val;

    this.cambioValor.emit( this.progreso )

    this.txtProgress.nativeElement.focus();
  }

}
