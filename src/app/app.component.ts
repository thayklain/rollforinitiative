import { Component } from '@angular/core';
import { Turn } from 'src/model/structure';
import { SystemService } from './system.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  turn: Turn;

  constructor(private service: SystemService) {
    this.turn = this.service.turn;
  }
}
