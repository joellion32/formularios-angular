import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate{
  [s:string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidarpasswordService {

  constructor() { }

// para validar si el usuario existe
existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(control.value == "Joel" || control.value == "Joselo"){
        resolve({existe: true})
      }else{
        resolve(null);
      }
    }, 3500)
  });
}



// para validar los passwords
  validarpassword(password1Name: string, password2Name: string){
    return (formGroup: FormGroup)=>{
      const password1 = formGroup.controls[password1Name]
      const password2 = formGroup.controls[password2Name]

      // validar si son iguales
      if(password1.value === password2.value){
        password1.setErrors(null);
      }else{
        password2.setErrors({noEsigual: true});
      }

    }
  }
}
