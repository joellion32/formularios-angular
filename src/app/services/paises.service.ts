import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }


  paises(){
   return this.http.get('https://restcountries.eu/rest/v2/lang/es')
   // para poder sacar los datos que necesitemos de la api NO TODOS
   .pipe(
     map(
       (resp:any[]) => {
         return resp.map( pais => {
         return {
           code: pais.alpha3Code,
           name: pais.name
         }
         })
       }
     )
   )
  }
}
