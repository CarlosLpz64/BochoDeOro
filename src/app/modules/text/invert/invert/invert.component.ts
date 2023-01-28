import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invert',
  templateUrl: './invert.component.html',
  styleUrls: ['./invert.component.css']
})
export class InvertComponent implements OnInit {

  value: string = "";

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Invertir texto online');
    this.meta.updateTag({ name: 'title', content: 'Invertir texto online' });
    this.meta.updateTag({ name: 'description', content: 'Escribe el texto de reversa automáticamente con el generador online.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, invertir, al revés' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }


}
