import { Component, OnInit } from '@angular/core';
import { SemanticoService } from '../../servicios/semantico/semantico.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  detalles: any;
  objectKeys = Object.keys;
  constructor(
    private semanticoService: SemanticoService,
  ) { }

  ngOnInit() {
    // llama al servicio
    this.semanticoService.getDetalles().subscribe(data => {
      // subscribe los datos
      this.detalles = data;
    });
  }

}
