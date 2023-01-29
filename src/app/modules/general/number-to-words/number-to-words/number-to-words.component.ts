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
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'},
  {name: 'Lorem Ipsum', location: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique.", postal: 'Ipsum, Lorem', rfc: 'LOREMIPSUM'}
];
@Component({
  selector: 'app-number-to-words',
  templateUrl: './number-to-words.component.html',
  styleUrls: ['./number-to-words.component.css']
})
export class NumberToWordsComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'location', 'postal'];
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
