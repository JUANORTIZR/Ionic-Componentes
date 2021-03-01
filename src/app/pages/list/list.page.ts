import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  constructor(private dataService: DataService) { }
  @ViewChild(IonList) ionList: IonList;
  ngOnInit() {
    this.obtenerDatos();
  }


  obtenerDatos() {
    console.log(this.dataService.obtenerDatos());
    this.usuarios = this.dataService.obtenerDatos();
  }
  
  favorite(user: any) {
    console.log('favorite ',user);
    this.ionList.closeSlidingItems();
  }
  share(user: any) {
    console.log('share ',user);
    this.ionList.closeSlidingItems();
  }

  unread(user){
    console.log('delete', user);
    this.ionList.closeSlidingItems();
  }
}
