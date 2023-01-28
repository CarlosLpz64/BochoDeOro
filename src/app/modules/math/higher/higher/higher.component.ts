import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-higher',
  templateUrl: './higher.component.html',
  styleUrls: ['./higher.component.css']
})
export class HigherComponent implements OnInit {

  separator: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;
  disableSeparator:boolean = false;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Obtener el valor más alto de una lista');
    this.meta.updateTag({ name: 'title', content: 'Obtener el valor más alto de una lista' });
    this.meta.updateTag({ name: 'description', content: 'Obtén el valor mayor de una lista de números' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, JSON, arreglo, más alto, mayor, higher, menor, lower, más bajo' });
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
    let tempNumbers:Array<number> = []
    for (let x of temp) {
      const aux = parseFloat(x)
      if (!isNaN(aux)) {
        tempNumbers.push(aux)
      }
    }
    if (tempNumbers.length === 0) {
      this._snackBar.open('Error mostrar valor. Verifica el texto de entrada o el separador.', '', {duration: 3000});
      this.result = "0"
      return
    }
    const result = Math.max(...tempNumbers)
    if (isNaN(result)) {
      this._snackBar.open('Error mostrar valor. Verifica el texto de entrada o el separador.', '', {duration: 3000});
      this.result = "0"
      return
    }
    this.result = result.toString()
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
