import { Component, OnInit } from '@angular/core';
import { SemanticoService } from '../../servicios/semantico/semantico.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})

//export class DetallesComponent implements OnInit {
export class DetallesComponent implements OnInit{
  detalles: any;
  objectKeys = Object.keys;
  resultado =  false;


  constructor(
    private semanticoService: SemanticoService,
  ) { }

  ngOnInit() {
    // llama al servicio
    this.semanticoService.getDetalles().subscribe(data => {
      // subscribe los datos
      if(data){
        this.detalles = data;
        this.resultado = true;
      }else{
        this.resultado = false;
      }
    });
  }

}

