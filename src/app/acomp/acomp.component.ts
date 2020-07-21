import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {
  data: any;
  navStart: Observable<NavigationStart>;

  constructor(
    private router: Router,
  ) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)

    ) as Observable<NavigationStart>;
  }

  ngOnInit(): void {
    this.navStart.subscribe(evt => console.log('Navigation started!'));
  }




}
