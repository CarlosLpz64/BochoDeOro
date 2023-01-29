import { Component, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { EmitterService } from './shared/services/emitter-service.service';
import { IconService } from './shared/services/icon.service';
import { LocalStorageService } from './shared/services/local-storage.service';

// ng build --configuration production --base-href /tools/
// declare var googletag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogin: boolean = true;

  @ViewChild('drawer') sidebar: any;

  constructor(
    private iconSvc: IconService,
    private emitterService: EmitterService,
    private lStorage: LocalStorageService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.emitterService.toggleSidebar.subscribe(() => {
      this.sidebar.toggle();
    });
    this.emitterService.closeSidebar.subscribe(() => {
      this.sidebar.close();
    });
  }

  onActivate(): void {
    if (this.router.url == "/login") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    document.body.scrollTop = 0;
    this.route.fragment.subscribe((f) => {
      const element = document.querySelector('#' + f);
      if (element) element.scrollIntoView();
    });
  }
}
