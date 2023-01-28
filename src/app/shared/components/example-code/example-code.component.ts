import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-example-code',
  templateUrl: './example-code.component.html',
  styleUrls: ['./example-code.component.css']
})
export class ExampleCodeComponent implements OnInit {

  @Input() htmlContent:string = ``
  @Input() cssContent:string = ``
  @Input() tsContent:string = ``
  @Input() htmlTitle:string = 'example.html'
  @Input() cssTitle:string = 'example.css'
  @Input() tsTitle:string = 'example.ts'


  constructor(private _snackBar: MatSnackBar) { }

  confirmCopy() {
    this._snackBar.open('¡Texto copiado!', '', {duration: 500});
  }

  ngOnInit(): void {
  }

}
