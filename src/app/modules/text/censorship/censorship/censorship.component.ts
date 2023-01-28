import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NONALPHANUMERICLIST, SPACE } from 'src/app/shared/constants/regex';
import { BLACKLIST } from '../blacklist';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-censorship',
  templateUrl: './censorship.component.html',
  styleUrls: ['./censorship.component.css']
})
export class CensorshipComponent implements OnInit {

  value: string = "";
  result: string = "";
  blacklist:Array<string> = BLACKLIST;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Censurar texto online');
    this.meta.updateTag({ name: 'title', content: 'Censurar texto online' });
    this.meta.updateTag({ name: 'description', content: 'Censura contenido automáticamente en línea' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, censurar, groserias, malas palabras, insultos, juegos' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    let words = this.value.split(SPACE);
    for (let w in words) {
      let word = words[w];
      if (this.inBlackList(word)) {
        words[w] = "*".repeat(word.length)
      }
    }
    const resultText = words.reduce((accumulator, currentValue, index) => {
      return `${accumulator} ${currentValue}`
    }, "");
    this.result = resultText.trim()
  }

  inBlackList(word:string):boolean {
    word = word.toUpperCase().replace(NONALPHANUMERICLIST, '');
    if (this.blacklist.includes(word))
      return true
    return false
  }

}
