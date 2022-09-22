import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://backendjcm.herokuapp.com/experiencia';

  constructor(private http: HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL + '/all');
  }

  public addExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.URL + '/add', experiencia);
  }

  public updateExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(this.URL + '/update', experiencia);
  }

  public deleteExperiencia(idExp: number):Observable<void>{
    return this.http.delete<void>(this.URL + `/delete/${idExp}`);
  }
}
