import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lists-hub',
  templateUrl: './lists-hub.component.html',
  styleUrls: ['./lists-hub.component.css']
})
export class ListsHubComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Herramientas informáticas de listas');
    this.meta.updateTag({ name: 'title', content: 'Herramientas informáticas de listas' });
    this.meta.updateTag({ name: 'description', content: 'Encuentra y utiliza distintas herramientas online para realizar tareas diarias. Edita texto, imagénes, listas y herramientas de listados.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, javascript, typescript, conejos, programadores, herramientas, tools, encriptar, sumar, desencriptar, lifehack, arreglos, listas, cadenas, texto, matemáticas, al azar, generador, convertidor, menu, listados' });
  }

  ngOnInit(): void {
  }

}
