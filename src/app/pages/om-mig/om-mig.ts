import { Component } from '@angular/core';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';

@Component({
  selector: 'app-om-mig',
  imports: [Klocka, Projekt],
  templateUrl: './om-mig.html',
  styleUrl: './om-mig.css'
})
export class OmMig {
}
