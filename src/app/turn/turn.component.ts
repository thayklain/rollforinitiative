import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss'],
})
export class TurnComponent implements OnInit {

  name: string;
  ac: number;
  hp:number;
  mp: number;
  perception: number;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  addChar(): void {
    this.service.addChar(this.name, this.ac, this.hp, this.mp, this.perception);
    this.router.navigate(['/home']);
  }

}
