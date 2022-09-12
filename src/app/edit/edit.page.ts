import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  oldName: string;
  newName: string;
  newAc: number;
  newHp:number;
  newMp: number;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute) { 
    this.newName= "";
    this.newAc = null;
    this.newHp = null;
    this.newMp = null;
  }
  ngOnInit(): void {}

  editChar(): void {
    this.service.editChar(this.oldName, this.newName, this.newAc, this.newHp, this.newMp);
    this.router.navigate(['/home']);
  }

}
