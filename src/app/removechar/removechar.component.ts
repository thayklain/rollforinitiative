import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-removechar',
  templateUrl: './removechar.component.html',
  styleUrls: ['./removechar.component.scss'],
})
export class RemovecharComponent implements OnInit {

  name: string;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  exterminate(): void {
    this.service.exterminate(this.name);
    this.router.navigate(['/home']);
  }

}
