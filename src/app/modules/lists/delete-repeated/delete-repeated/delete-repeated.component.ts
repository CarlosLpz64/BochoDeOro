import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delete-repeated',
  templateUrl: './delete-repeated.component.html',
  styleUrls: ['./delete-repeated.component.css']
})
export class DeleteRepeatedComponent implements OnInit {

  separator: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;
  disableSeparator:boolean = false;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Eliminar valores repetidos de una lista online');
    this.meta.updateTag({ name: 'title', content: 'Eliminar valores repetidos de una lista online' });
    this.meta.updateTag({ name: 'description', content: 'Eliminar valores repetidos de una lista online automáticamente.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, repetidos, eliminar, clonados' });
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      enter: [false],
    });
  }

  withEnter(value: boolean):void {
    if (value) {
      this.separator = '\n'
      this.disableSeparator = true;
    } else {
      this.disableSeparator = false;
    }
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    let temp:Array<string> = this.value.split(this.separator);
    temp = temp.filter((item, index) => temp.indexOf(item) === index);
    const resultText = temp.reduce((accumulator, currentValue, index) => {
      if (index === 0) {
        return `${accumulator}${currentValue}`
      }
      return `${accumulator}${this.separator}${currentValue}`
    }, "");
    this.result = resultText.trim();
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }
}
