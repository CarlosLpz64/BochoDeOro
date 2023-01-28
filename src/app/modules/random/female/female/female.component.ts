import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FEMALES } from '../female-list'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  result: string = "";
  females:Array<any> = FEMALES;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Generador de nombres de mujer Online');
    this.meta.updateTag({ name: 'title', content: 'Generador de nombres de mujer Online' });
    this.meta.updateTag({ name: 'description', content: 'Generador de nombres femenininos en línea. Obtener un nombre de mujer al azar.' });
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
