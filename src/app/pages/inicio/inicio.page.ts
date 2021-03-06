import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Boton',
      redirectTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: "calendar-outline",
      name: "Date time",
      redirectTo: '/date-time'
    },
    {
      icon:"car-outline",
      name: "Fab",
      redirectTo: "/fab"
    },
    {
      icon:"infinite-outline",
      name: "Infinite scroll",
      redirectTo: "/infinite"
    },
    {
      icon:"hammer-outline",
      name: "Imput",
      redirectTo: "/input"
    },
    {
      icon:"list-outline",
      name: "List",
      redirectTo: "/list"
    },
    {
      icon: "reorder-three-outline",
      name:"List reorder",
      redirectTo: "/list-reorder"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
