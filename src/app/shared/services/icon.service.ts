import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconExtra } from 'src/assets/icons/iconExtra';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mdi.svg'));
    for (const icon of IconExtra) {
      matIconRegistry.addSvgIcon(icon, domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/extra/${icon}.svg`));
    }
  }

}
