import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turn } from 'src/model/structure';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  turn: Turn;

  constructor(private httpClient: HttpClient) { 
    this.turn = new Turn();
  }

  addChar(name, ac, hp, mp, perception): void {
    this.turn.newChar(name, ac, hp, mp, perception);
  }

  removeChar(charRemove: string): void {
    for (let index = this.turn.characters.length - 1; index >= 0; index--) {
        const element = this.turn.characters[index];
            if(element.name === charRemove) {
                this.turn.characters.splice(index,1);
        };
    };
}   

editChar(editChar: string, newName: string, newAc: number, newHp: number, newMp: number): void {
  for (let index = this.turn.characters.length - 1; index >= 0; index--) {
      const element = this.turn.characters[index];
      if(element.name === editChar) {
        if(newName !== "")
          this.turn.characters[index].name = newName;    
        if(newAc !== null)      
          this.turn.characters[index].ac = newAc;
        if(newHp !== null)
          this.turn.characters[index].hp = newHp;
        if(newMp !== null)
          this.turn.characters[index].mp = newMp;
      };
  };
}   

getMonsters() {
  return this.httpClient.get('https://www.dnd5eapi.co/api/conditions/blinded');
};

}
