import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../../services/emitter-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private emitterService: EmitterService
  ) { }

  ngOnInit(): void {
  }

  ToggleSidebar(): void {
    this.emitterService.toggleSidebar.emit();
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
