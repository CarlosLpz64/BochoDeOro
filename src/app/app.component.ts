import { Component, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmitterService } from './shared/services/emitter-service.service';
import { IconService } from './shared/services/icon.service';
import { LocalStorageService } from './shared/services/local-storage.service';

// ng build --configuration production --base-href /tools/
// declare var googletag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cookiesAccepted:boolean = false;

  @ViewChild('drawer') sidebar: any;

  constructor (
    private iconSvc: IconService,
    private emitterService: EmitterService,
    private lStorage: LocalStorageService,
    private route: ActivatedRoute,
    private renderer: Renderer2
    ) { this.renderer.addClass(document.body, 'body-class'); }

  ngOnInit(): void {
    this.emitterService.toggleSidebar.subscribe(() => {
      this.sidebar.toggle();
    });
    this.emitterService.closeSidebar.subscribe(() => {
      this.sidebar.close();
    });
  }

  onActivate():void {
    document.body.scrollTop = 0;
    //Adsense
    // googletag.pubads().refresh();
    // Navegar a sección específica de html
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView()
    })
  }
}
