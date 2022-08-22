import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/service/header.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(private headerService: HeaderService, private tokenService: TokenService) { }

  isLogged = false;

  
  ngOnInit(): void {
    this.getPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  public getPersona(): void{
    this.headerService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona= response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'editPerfil') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editPerfilPersonaModal');
    } else if (mode === 'editDesc') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editDescPersonaModal');
    } else if (mode === 'editBanner') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editBannerPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }


  public onUpdatePersona(persona: Persona): void {
    this.editPersona = persona;
    this.headerService.updatePersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
