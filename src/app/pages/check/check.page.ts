import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor() { }
  data = [
    {
      name: "primary",
      selected: true
    },
    {
      name: "secondary",
      selected: false
    },
    {
      name: "tertiary",
      selected: true
    },
    {
      name: "success",
      selected: false
    }
  ]
  ngOnInit() {
  }

  onClick(item:any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }
}
