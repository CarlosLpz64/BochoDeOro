import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SucursalModalComponent } from './sucursal-modal/sucursal-modal.component';

export interface PeriodicElement {
  name: string;
  location: string;
  postal: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
  {name: 'Lorem', location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", postal: '12345'},
];

@Component({
  selector: 'app-general-hub',
  templateUrl: './general-hub.component.html',
  styleUrls: ['./general-hub.component.css']
})
export class GeneralHubComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'location', 'postal', 'options'];
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
    const dialogRef = this.dialog.open(SucursalModalComponent, {height:'90vh', width:'50vw', data: {isEdit: status}});
  }
}
