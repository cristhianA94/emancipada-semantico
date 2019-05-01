import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemanticoService {
  // url del servidor
  emancipadaUrl = 'http://127.0.0.1:8000/detalles/';
  buscarUrl = 'http://127.0.0.1:8000/buscar/';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) { }
  // obtiene json mediante metodo http get
  getDetalles() {
    // retorna json del servidor
    return this.http.get(this.emancipadaUrl, this.httpOptions);
  }
  buscar(data) {
    // retorna json del servidor
    return this.http.get(`${this.buscarUrl}?palabra=${data.palabra}`,this.httpOptions);
  }
}
