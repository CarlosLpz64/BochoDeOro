import { Component, OnInit } from '@angular/core';

interface Lorem {
  value: string;
}
@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {

  lorems: Lorem[] = [
    {value: 'Lorem'},
    {value: 'Ipsum'},
    {value: 'Lorem'},
    {value: 'Ipsum'},
    {value: 'Lorem'},
    {value: 'Ipsum'},
    {value: 'Lorem'},
    {value: 'Ipsum'},
  ];

  constructor() {
    
   }

  ngOnInit(): void {
  }

  Asegurar() {
    alert("Automóvil asegurado")
  }

}
