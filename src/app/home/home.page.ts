import { Component } from '@angular/core';
import { Character, Turn } from 'src/model/structure';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  turn: Turn;
  name: string;
  charSelected: Character;

  constructor(private service: SystemService) {
    this.turn = this.service.turn;
  }

  exterminate(): void {
    this.service.removeChar(this.name);
  }

  refresh(): void {
    window.location.reload();
  }
};