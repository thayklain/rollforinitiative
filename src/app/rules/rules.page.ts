import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  data: any;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {}

  getMonsters(): void {
    this.service.getMonsters();
    console.log(this.data);
  };

}
