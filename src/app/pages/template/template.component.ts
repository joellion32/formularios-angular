import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

usuario: any = {
 nombre: 'Fernando', 
 apellido: 'Herrera',
 email: 'fernandoherrera@gmail.com',
 pais: '',
 genero: ''
}

paises: any[] = []; 

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
    this.paisService.paises().subscribe(resp => {
      this.paises = resp;

      this.paises.unshift({
       name: '[Seleccionar pais]',
       code: '' 
      })
      console.log(this.paises);
    });
  }

  guardar(form: NgForm){
    if(form.invalid){
      // mostrar errores si el formulario es invalido
      Object.values(form.controls).forEach(control=> {
      control.markAsTouched();   
      })
    }else{
      console.log(form.value) 
    }

  }

}
