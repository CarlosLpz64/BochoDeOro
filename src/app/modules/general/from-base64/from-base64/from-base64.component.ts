import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-from-base64',
  templateUrl: './from-base64.component.html',
  styleUrls: ['./from-base64.component.css']
})
export class FromBase64Component implements OnInit {

  value: string = "";

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Convertir texto base64 a Imagen');
    this.meta.updateTag({ name: 'title', content: 'Convertir texto base64 a Imagen' });
    this.meta.updateTag({ name: 'description', content: 'Convertidor online de texto en base64 a imagen' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, contador, contar, palabras, letras' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

}
