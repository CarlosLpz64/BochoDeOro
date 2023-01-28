import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lowercase',
  templateUrl: './lowercase.component.html',
  styleUrls: ['./lowercase.component.css']
})
export class LowercaseComponent implements OnInit {

  value: string = "";

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Convertir texto a minúsculas online');
    this.meta.updateTag({ name: 'title', content: 'Convertir texto a minúsculas online' });
    this.meta.updateTag({ name: 'description', content: 'Convertidor Online de texto a mayúsculas automáticamente' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, contador, contar, palabras, letras, mayúsculas, minúsculsa, lowercase, uppercase' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

}
