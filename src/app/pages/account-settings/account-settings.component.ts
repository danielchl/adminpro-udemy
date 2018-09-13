import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, 
              public _ajustes: SettingsService) { }

  ngOnInit() {
    this.aplicarCheck();
  }

  cambiarColor( tema:string, link: any ) :void{

    this._ajustes.aplicarAjustes(tema);

    this.aplicarCheck( link );

  }

  aplicarCheck( link?: any ): void {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema

    for (let ref of selectores){
      ref.classList.remove('working');
      if ( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
      }
    }
    
    

  }
  

}
