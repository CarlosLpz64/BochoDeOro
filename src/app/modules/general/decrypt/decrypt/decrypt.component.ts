import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClientModalComponent } from './client-modal/client-modal.component';

export interface PeriodicElement {
  name: string;
  location: string;
  postal: string;
  rfc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "lorem@ipsum.com", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'}
];

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'location', 'postal', 'rfc', 'options'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow() {
    confirm("Estás seguro que quieres eliminar este registro?")
  }

  openDialog(status:boolean) {
    const dialogRef = this.dialog.open(ClientModalComponent, {height:'90vh', width:'50vw', data: {isEdit: status}});
  }

}
