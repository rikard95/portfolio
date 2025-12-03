import { Routes } from '@angular/router';



import { Kontakt } from './pages/kontakt/kontakt';
import { OmMig } from './pages/om-mig/om-mig';
import { Hem } from './pages/hem/hem';
import { TodoComponent } from './pages/todo/todo';
import { CalculatorComponent } from './pages/calculator/calculator';
import { TimerAlarm } from './pages/timer-alarm/timer-alarm';
import { Kalender } from './pages/kalender/kalender';
import { Dagbok } from './pages/dagbok/dagbok';
import { Slides } from './pages/slides/slides';
import { Login } from './pages/login/login';
import { Registrera } from './pages/registrera/registrera';


export const routes: Routes = [
/*   { path: '', component: Login},
  { path: 'registrera', component: Registrera }, */
  { path: '', component: Hem},
  { path: 'om-mig', component: OmMig },
  /* { path: 'kontakt', component: Kontakt }, */
  { path: 'todo', component: TodoComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'timer-alarm', component: TimerAlarm },
  { path: 'kalender', component: Kalender },
  { path: 'dagbok', component: Dagbok },
  { path: 'slides', component: Slides },
  { path: '**', redirectTo: '' }
];
