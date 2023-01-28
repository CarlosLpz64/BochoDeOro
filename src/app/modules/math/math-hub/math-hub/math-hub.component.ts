import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-math-hub',
  templateUrl: './math-hub.component.html',
  styleUrls: ['./math-hub.component.css']
})
export class MathHubComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Herramientas informáticas de matemáticas');
    this.meta.updateTag({ name: 'title', content: 'Herramientas informáticas de matemáticas' });
    this.meta.updateTag({ name: 'description', content: 'Encuentra y utiliza distintas herramientas online para realizar tareas diarias. Edita texto, imagénes, listas y herramientas de listados.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, listados' });
  }

  ngOnInit(): void {
  }

}
