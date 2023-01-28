import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MALES } from '../male-list'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  result: string = "";
  females:Array<any> = MALES;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Generador de nombres de hombre Online');
    this.meta.updateTag({ name: 'title', content: 'Generador de nombres de hombre Online' });
    this.meta.updateTag({ name: 'description', content: 'Generador de nombres masculinos en línea. Obtener un nombre de hombre al azar.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, mujer, femenino, nombre, apellido, hombre, masculino' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    this.result = this.females[Math.floor(Math.random()*this.females.length)][1]
  }

}
