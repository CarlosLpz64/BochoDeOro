import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  location: string;
  postal: string;
  rfc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "20", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'}
];
@Component({
  selector: 'app-to-base64',
  templateUrl: './to-base64.component.html',
  styleUrls: ['./to-base64.component.css']
})
export class ToBase64Component implements AfterViewInit {

  displayedColumns: string[] = ['name', 'location', 'postal', 'options'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

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

}
