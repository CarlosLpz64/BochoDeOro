import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../../services/emitter-service.service';
import { ViewInterface } from './IView';
import { VIEWS } from './views'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: ViewInterface[] = VIEWS

  constructor(
    private emitterService: EmitterService
  ) { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  CloseSidebar(): void {
    this.emitterService.closeSidebar.emit();
  }
  
}
