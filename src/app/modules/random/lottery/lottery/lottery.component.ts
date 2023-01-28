import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {

  separator: string = ''
  value: string = "";
  result: string = "";
  myForm!: FormGroup;
  disableSeparator:boolean = false;

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Obtener un valor aleatorio de una lista');
    this.meta.updateTag({ name: 'title', content: 'Obtener un valor aleatorio de una lista' });
    this.meta.updateTag({ name: 'description', content: 'Obtenen un valor aleatorio de una lista personalizable.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, numeros, palabras, listado, JSON, arreglo, random, aleatorio, azar' });
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
    this.result = temp[Math.floor(Math.random()*temp.length)]
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
