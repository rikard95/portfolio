import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Klocka } from "../../shared/klocka/klocka";
import { Projekt } from '../../shared/projekt/projekt';

@Component({
  selector: 'app-hem',
  imports: [RouterModule, Klocka, Projekt],
  templateUrl: './hem.html',
  styleUrl: './hem.css'
})
export class Hem {

}
