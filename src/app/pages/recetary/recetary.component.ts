import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetary',
  templateUrl: './recetary.component.html',
  styleUrls: ['./recetary.component.scss']
})
export class RecetaryComponent implements OnInit {
  isShownCow: boolean = true ;
  isShownChicken: boolean = false ; // hidden by default
  isShownPig: boolean = false ; // hidden by default
  isShownFish: boolean = false ; // hidden by default

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

  toggleShowCow() {
    
    this.isShownCow = ! this.isShownCow;

  }

  toggleShowChicken() {
    
    this.isShownChicken = ! this.isShownChicken;

  }

  toggleShowPig() {
    
    this.isShownPig = ! this.isShownPig;
    
  }

  toggleShowFish() {
    
    this.isShownFish = ! this.isShownFish;
    
  }
  
  constructor() { }
  ngOnInit() {
  }

}
