import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paginatorAttributes: any[] = [];
  items: number[];

  constructor() { }

  ngOnInit() {
    this.items = [1, 2];
    this.paginatorAttributes.push({
      pageNumber: 1,
      pageSize: 10
    });
    this.paginatorAttributes.push({
      pageNumber: 2,
      pageSize: 20
    });
  }

  paginate(index: number, $event: any): void {
    this.paginatorAttributes[index].pageNumber = $event.page + 1;
    this.paginatorAttributes[index].pageSize = $event.rows;
  }
}
