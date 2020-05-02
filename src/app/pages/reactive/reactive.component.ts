import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
form: FormGroup;

  constructor(private fb: FormBuilder) { 
  this.crearFormulario();
  }

  ngOnInit(): void {
  }


  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['Joel', Validators.required],
      apellido: ['Toribio', Validators.required],
      email: ['joeltoribio@gmail.com', Validators.email] 
    });
  }

  guardar(){
    console.log(this.form);
  }

}
