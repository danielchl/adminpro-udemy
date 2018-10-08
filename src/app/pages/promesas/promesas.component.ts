import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 


    this.contarTres()
    .then(
      () => console.log('termino')
    )
    .catch(error => console.error('Error en la promesa'))
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let cont = 0;
      let intervalo = setInterval(()=>{

        cont += 1;
        console.log(cont);
        

        if( cont === 3){
          clearInterval(intervalo);
          resolve(true);
        }

      }, 1000)
    });
  }

}
