import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  separator: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;
  disableSeparator:boolean = false;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Sumar un listado de números online');
    this.meta.updateTag({ name: 'title', content: 'Sumar un listado de números online' });
    this.meta.updateTag({ name: 'description', content: 'Obtener el total de varios números' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, JSON, arreglo, sumar, total' });
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
    const total = temp.reduce(function(accumulator, currentValue) {
      return accumulator + parseFloat(currentValue)
    }, 0);
    if (isNaN(total)) {
      this._snackBar.open('Error mostrar valor. Verifica el texto de entrada o el separador.', '', {duration: 3000});
      this.result = "0"
      return
    }
    this.result = total.toString()
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
