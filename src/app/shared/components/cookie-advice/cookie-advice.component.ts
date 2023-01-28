import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../../services/emitter-service.service';

@Component({
  selector: 'app-cookie-advice',
  templateUrl: './cookie-advice.component.html',
  styleUrls: ['./cookie-advice.component.css']
})
export class CookieAdviceComponent implements OnInit {

  constructor(private emitterService: EmitterService) { }

  ngOnInit(): void {
  }

  AcceptCookies(): void {
    this.emitterService.acceptedCookies.emit();
  }

}
