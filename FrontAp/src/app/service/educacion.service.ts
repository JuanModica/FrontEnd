import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = 'https://backendjcm.herokuapp.com/educacion';

  constructor(private http: HttpClient) {}

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + '/all');
  }

  public addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.URL + '/add', educacion);
  }

  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(this.URL + '/update', educacion);
  }

  public deleteEducacion(idEdu: number):Observable<void>{
    return this.http.delete<void>(this.URL + `/delete/${idEdu}`);
  }
}
