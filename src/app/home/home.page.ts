import { Component } from '@angular/core';
import { Turn } from 'src/model/structure';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  turn: Turn;

  constructor(private service: SystemService) {
    this.turn = this.service.turn;
  }

}
