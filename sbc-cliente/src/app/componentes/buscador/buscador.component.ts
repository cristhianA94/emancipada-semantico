import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { SemanticoService } from '../../servicios/semantico/semantico.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  buscadorForm = this.fb.group({
    palabra: ['', Validators.required],
  });
  detalles: any;
  objectKeys = Object.keys;
  resultado: boolean;

  constructor(
    private fb: FormBuilder,
    private semanticoService: SemanticoService
  ) { }

  ngOnInit() {
  }
  buscar(){
    this.semanticoService.buscar(this.buscadorForm.value).subscribe(data=>{
      if(data){
        this.detalles = data;
        this.resultado = true;
      }else{
        this.resultado = false;
      }
    })
  }

}
