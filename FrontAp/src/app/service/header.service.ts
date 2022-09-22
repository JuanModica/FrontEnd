import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  URL = 'https://backendjcm.herokuapp.com/persona';

  constructor(private http: HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL + '/id/1')
  }

  public updatePersona(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(this.URL + '/update', persona);
  }
}
