import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  result: string = "";
  myForm!: FormGroup;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Obtener un valor aleatorio entre un rango de números');
    this.meta.updateTag({ name: 'title', content: 'Obtener un valor aleatorio entre un rango de números' });
    this.meta.updateTag({ name: 'description', content: 'Obtenen un valor aleatorio entre un rango de números personalizable.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, JSON, arreglo, random, aleatorio, azar' });
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fromValue: [0, [Validators.required]],
      toValue: [100, [Validators.required]],
    });
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    const from = this.myForm.controls['fromValue'].value;
    const to = this.myForm.controls['toValue'].value;
    if (from > to) {
      this._snackBar.open('El valor mínimo no debe ser mayor al valor máximo', '', {duration: 2500});
      return
    }
    this.result = (Math.floor(Math.random() * (to - (from) + 1)) + (from)).toString();
  }

}
