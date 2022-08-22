import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public proyectos: Proyecto[] = [];
  public editProyecto: Proyecto | undefined;
  public deleteProyecto: Proyecto | undefined;

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.getProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public getProyecto(): void {
    this.proyectoService.getProyecto().subscribe({
      next: (response: Proyecto[]) => {
        this.proyectos = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, proyecto?: Proyecto): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    } else if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    } else if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm: NgForm): void {
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.addProyecto(addForm.value).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
        addForm.reset();
      }, 
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onUpdateProyecto(proyecto: Proyecto): void {
    this.editProyecto = proyecto;
    this.proyectoService.updateProyecto(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteProyecto(idPro: number): void {
    this.proyectoService.deleteProyecto(idPro).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
}
