import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
  
    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('error', error)
      
    )

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let cont = 0;
      let intervalo = setInterval( () => {
        
        cont += 1;

        const salida = {
          valor: cont
        }

        observer.next( salida );

        // if (cont === 3 ){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (cont === 2 ){
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }
      }, 1000)


    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        // console.log(' Filter ', valor), index;

        if ( (valor % 2 ) === 1 ){
          return true
        }else{
          return false
        }
        
      })
    );
  }

}
