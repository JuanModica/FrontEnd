import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'all');
  }

  public addProyecto(proyecto: Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.URL + 'add', proyecto);
  }

  public updateProyecto(proyecto: Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(this.URL + 'update', proyecto);
  }

  public deleteProyecto(idPro: number):Observable<void>{
    return this.http.delete<void>(this.URL + `delete/${idPro}`);
  }
}
