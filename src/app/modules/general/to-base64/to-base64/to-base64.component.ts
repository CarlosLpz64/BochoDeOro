import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-to-base64',
  templateUrl: './to-base64.component.html',
  styleUrls: ['./to-base64.component.css']
})
export class ToBase64Component implements OnInit {

  base64: string = '';

  constructor(private _snackBar: MatSnackBar, private meta: Meta, private title: Title, private fb: FormBuilder) {
    this.title.setTitle('Convertir imagen a base 64');
    this.meta.updateTag({ name: 'title', content: 'Convertir imagen a base 64' });
    this.meta.updateTag({ name: 'description', content: 'Convertidor online de imagen a texto en base64' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, online, imagen, base64, 64, convertir, transformar' });
   }

  

  ngOnInit(): void {
    
  }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  async seleccionarImagen(event: any) {
      const selectedFile:File = event.target.files[0];
      const filesize = ((selectedFile.size/1024)/1024).toFixed(4); 
      console.log(filesize)
      console.log(parseFloat(filesize))
      if (parseFloat(filesize) > 0.5) {
        this._snackBar.open('El límite del tamaño de archivo es de 500kb', '', {duration: 3000});
        return
      }
      this.base64 = "data:image/png;base64," + await this.convertImageToBase64(selectedFile);
  }

  async convertImageToBase64(image: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(image);
      reader.onload = () => {
        const buffer = reader.result as ArrayBuffer;
        const bytes = new Uint8Array(buffer);
        var binary = '';
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
  
        try {
          //const decoded = atob(base64);
          resolve(base64);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = error => reject(error);
    });
  }

  aconvertImageToBase64(image: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

}
