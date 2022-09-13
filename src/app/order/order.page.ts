import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turn } from 'src/model/structure';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  turn: Turn;
  oldIndex: number;
  newIndex: number;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute) { 
    this.turn = this.service.turn;
  }

  ngOnInit() {
  }

  orderChar(): void {
    this.service.orderChar(this.oldIndex, this.newIndex);
    this.router.navigate(['/home']);
  }

}
