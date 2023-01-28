import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as CryptoJS from 'crypto-js';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {

  cipherKey: string = ''
  value: string = "";
  result: string = "";

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title) {
    this.title.setTitle('Desencriptar texto online');
    this.meta.updateTag({ name: 'title', content: 'Desencriptar texto online' });
    this.meta.updateTag({ name: 'description', content: 'Desencripta un texto utilizando una llave secreta para mantener seguro el contenido.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, encriptar, desencriptar' });
   }

  ngOnInit(): void {
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  doAction() {
    this.result = CryptoJS.AES.decrypt(this.value.trim(), this.cipherKey.trim()).toString(CryptoJS.enc.Utf8)
    if (this.result === '') {
      this._snackBar.open('Sin resultados. Verifica la llave o mensaje encriptado.', '', {duration: 3000});
      return
    }
    this._snackBar.open('Resultado generado correctamente', '', {duration: 3000});
  }

}
