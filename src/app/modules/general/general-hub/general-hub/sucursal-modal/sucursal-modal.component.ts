import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sucursal-modal',
  templateUrl: './sucursal-modal.component.html',
  styleUrls: ['./sucursal-modal.component.css']
})
export class SucursalModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit(): void {
  }

}
