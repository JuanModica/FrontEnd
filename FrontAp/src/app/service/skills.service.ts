import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'https://backendjcm.herokuapp.com/skills';

  constructor(private http: HttpClient) { }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.URL + '/all');
  }

  public addSkills(skills: Skills):Observable<Skills>{
    return this.http.post<Skills>(this.URL + '/add', skills);
  }

  public updateSkills(skills: Skills):Observable<Skills>{
    return this.http.put<Skills>(this.URL + '/update', skills);
  }

  public deleteSkills(idSkills: number):Observable<void>{
    return this.http.delete<void>(this.URL + `/delete/${idSkills}`);
  }
}
