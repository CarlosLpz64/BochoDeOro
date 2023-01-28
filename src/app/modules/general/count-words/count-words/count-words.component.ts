import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-count-words',
  templateUrl: './count-words.component.html',
  styleUrls: ['./count-words.component.css']
})
export class CountWordsComponent implements OnInit {

  value: string = "";
  result: string = "";

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Contador de palabras online');
    this.meta.updateTag({ name: 'title', content: 'Contador de palabras online' });
    this.meta.updateTag({ name: 'description', content: 'Contador Online de palabras dentro de un texto.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, contador, contar, palabras, letras' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

}
