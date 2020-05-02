import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray,  } from '@angular/forms';
import { ValidarpasswordService } from 'src/app/services/validarpassword.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
form: FormGroup;

  constructor(private fb: FormBuilder, private validadores: ValidarpasswordService) { 
  this.crearFormulario();
  this.cargarData();
  }

  ngOnInit(): void {
  }


  // validar campos 
  validarCampos(valor){
  return this.form.get(valor).invalid && this.form.get(valor).touched;
  }

  get pasatiempos(){
    return this.form.get("pasatiempos") as FormArray;
  }




  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.validadores.existeUsuario],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      direccion: this.fb.group({
       distrito: ['', Validators.required],
       ciudad: ['', Validators.required] 
      }),
      pasatiempos: this.fb.array([])
    }, {validators: this.validadores.validarpassword('password1', 'password2')});
  }

  //  para cargar la data
  cargarData(){
    this.form.setValue({
      nombre: 'Joel',
      apellido: 'Toribio Polanco',
      email: 'joeltoribiopolanco@gmail.com',
      usuario: '',
      password1: '123',
      password2: '123',
      direccion: {
        distrito: 'Distrito Nacional',
        ciudad: 'Santo Domingo'
      },
      pasatiempos: []
    });
  }

// agregar pasatiempo
  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control(''));
  }

  eliminarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }


  guardar(){
    if(this.form.invalid){
      // mostrar errores si el formulario es invalido
      return Object.values(this.form.controls).forEach(control=> {
        control.markAllAsTouched();
      })
    }else{
      console.log(this.form.value) 
      this.form.reset();
    }

  }

}
