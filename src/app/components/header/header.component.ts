import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  values: { firstvalues: string[], secondvalues: string[], thirdvalues: string[] } = {
    firstvalues: ['22'],
    secondvalues: ['12'],
    thirdvalues: ['20'],
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getValues($event : {firstvalues: string[], secondvalues: string[], thirdvalues: string[]}) {
    this.values = $event
  }

}
