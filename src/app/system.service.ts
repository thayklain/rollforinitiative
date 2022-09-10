import { Injectable } from '@angular/core';
import { Turn } from 'src/model/structure';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  turn: Turn;

  constructor() { 
    this.turn = new Turn();
  }

  addChar(name, ac, hp, mp, perception): void {
    this.turn.newChar(name, ac, hp, mp, perception);
  }

  exterminate(charRemove): void {
    this.turn.removeChar(charRemove);
  }
}
