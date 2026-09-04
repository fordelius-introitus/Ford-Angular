import { Component } from '@angular/core';
import { BoasvindasPopup } from "../../componentes/boasvindas-popup/boasvindas-popup";
import { Menu } from "../../componentes/menu/menu";

@Component({
  selector: 'app-home',
  imports: [BoasvindasPopup, Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
