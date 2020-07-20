import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {
  data: any;

  constructor(
    private router: Router,
    private sharedData: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedData.currentData.subscribe(data => this.data = data);
  }

  changeData(): void {
    this.sharedData.changeData({name: 'Romario Varia'});
    this.router.navigate(['/acomp']);
  }

}
