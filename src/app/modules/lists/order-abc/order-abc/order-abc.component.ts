import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-abc',
  templateUrl: './order-abc.component.html',
  styleUrls: ['./order-abc.component.css']
})
export class OrderAbcComponent implements OnInit {

  separator: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;
  disableSeparator:boolean = false;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Ordenar contenido alfabéticamente online');
    this.meta.updateTag({ name: 'title', content: 'Ordenar contenido alfabéticamente online' });
    this.meta.updateTag({ name: 'description', content: 'Ordenar automáticamente un listado en orden alfabético de la A a la Z' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, alfabeticamente, abc, zyx' });
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
    const temp:Array<string> = this.value.split(this.separator);
    temp.sort()
    const resultText = temp.reduce((accumulator, currentValue, index) => {
      if (index === 0) {
        return `${accumulator}${currentValue}`
      }
      return `${accumulator}${this.separator}${currentValue}`
    }, "");
    this.result = resultText;
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
