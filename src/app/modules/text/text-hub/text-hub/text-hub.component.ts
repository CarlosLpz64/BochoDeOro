import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-text-hub',
  templateUrl: './text-hub.component.html',
  styleUrls: ['./text-hub.component.css']
})
export class TextHubComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Herramientas informáticas de texto');
    this.meta.updateTag({ name: 'title', content: 'Herramientas informáticas de texto' });
    this.meta.updateTag({ name: 'description', content: 'Encuentra y utiliza distintas herramientas online para realizar tareas diarias. Edita texto, imagénes, listas y herramientas generales.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu' });
  }

  ngOnInit(): void {
  }

}
