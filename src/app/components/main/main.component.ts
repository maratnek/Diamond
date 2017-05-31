import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
	tiles = [
		{text: 'One', cols: 3, rows: 1, color: 'lightblue',img:'jewerly1.png'},
		{text: 'Two', cols: 1, rows: 2, color: 'lightgreen',img:'jewerly2.png'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink',img:'jewerly3.png'},
		{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1',img:'jewerly4.png'},
	];
  constructor() { }

  ngOnInit() {
  }

}
