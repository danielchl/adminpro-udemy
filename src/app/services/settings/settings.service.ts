import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaURL: "assets/css/colors/default.css",
    tema: "Default"
  }

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }

  guardarAjustes( url:string, tema:string ) {

    this.ajustes.temaURL =  url;
    this.ajustes.tema = tema;

    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }

  cargarAjustes(){

    if( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
    }

    this.aplicarAjustes( this.ajustes.tema );

  }

  aplicarAjustes( tema:string ) { 
    let url = `assets/css/colors/${ tema }.css`

    this._document.getElementById('tema').setAttribute('href', url);
    this.guardarAjustes( url, tema );
  }

}

interface Ajustes {
  temaURL: string;
  tema: string;
}
