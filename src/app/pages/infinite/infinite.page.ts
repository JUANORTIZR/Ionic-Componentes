import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[]= Array(20);
  constructor() { }

  ngOnInit() {
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      const nuevoArray = Array(20)
      this.data.push(...nuevoArray);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
