import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetary',
  templateUrl: './recetary.component.html',
  styleUrls: ['./recetary.component.scss']
})
export class RecetaryComponent implements OnInit {

  carnes = [
    {
      nombre: "res",
      url: "../../../assets/img/Res-icon.png"
    },
    {
      nombre: "pollo",
      url: "../../../assets/img/Pollo-icon.png"
    },
    {
      nombre: "cerdo",
      url: "../../../assets/img/Cerdo-icon.png"
    },
    {
      nombre: "pescado",
      url: "../../../assets/img/Pescado-icon.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
