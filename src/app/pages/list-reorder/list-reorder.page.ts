import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {


  superHeroes:string[] = ["Iron Man", "Spider man", "Thor", "Black Panter", "Black widow"];
  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){
    console.log(event);
    event.detail.complete();
    const itemMover = this.superHeroes.splice(event.detail.form, 1)[0];
    this.superHeroes.splice(event.detail.to, 0, itemMover);

    console.log(this.superHeroes);
  }

}
