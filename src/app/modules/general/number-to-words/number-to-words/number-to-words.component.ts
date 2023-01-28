import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import NumberToWords from '../NumberToWords';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-number-to-words',
  templateUrl: './number-to-words.component.html',
  styleUrls: ['./number-to-words.component.css']
})
export class NumberToWordsComponent implements OnInit {

  cipherKey: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Convertir un número a letras');
    this.meta.updateTag({ name: 'title', content: 'Convertir un número a letras' });
    this.meta.updateTag({ name: 'description', content: 'Convierte un número a palabras automáticamente. uno, dos, tres, cuatro, cinco.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras' });
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      value: ['', [Validators.required, Validators.max(999999999.99), Validators.min(-999999999.99)]],
    });
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    let value = this.myForm.controls['value'].value;
    let positive = true;
    if (value < 0) {
      value = value * -1;
      positive = false;
    }
    this.result = (positive ? "" : "MENOS ") + NumberToWords.NumeroALetras(parseFloat(value), 0)
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
