import { Injectable } from '@angular/core';
import { driver, type Driver, type DriveStep } from 'driver.js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private driverObj: Driver | null = null;

  constructor(private router: Router) {}

  startTour(): void {
    const steps: DriveStep[] = [
      {
        popover: {
          title: 'Välkommen till Portföljen!',
          description: 'Låt mig guida dig genom min portfolio och alla mina verktyg. Klicka på "Nästa" för att fortsätta.',
        }
      },
      {
        element: '.welcome-container',
        popover: {
          title: 'Välkomstsektionen',
          description: 'Här välkomnas besökare och får en översikt av vad portföljen innehåller.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: 'app-projekt',
        popover: {
          title: 'Projekt & Verktyg',
          description: 'Här hittar du alla mina projekt och verktyg. Låt oss gå igenom varje verktyg en i taget!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/todo"]',
        popover: {
          title: 'Todo-lista',
          description: 'Ett verktyg för att hålla koll på dina uppgifter. Skapa, redigera och markera uppgifter som slutförda.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/calculator"]',
        popover: {
          title: 'Miniräknare',
          description: 'En fullständig miniräknare med grundläggande matematiska operationer och anteckningsfunktion.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/timer-alarm"]',
        popover: {
          title: 'Timer/Alarm',
          description: 'Ställ in timers och alarm för att hålla koll på tid.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/dagbok"]',
        popover: {
          title: 'Dagbok',
          description: 'En digital dagbok där du kan skriva och spara dina tankar och upplevelser.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/kalender"]',
        popover: {
          title: 'Kalender',
          description: 'En interaktiv kalender för att hålla koll på datum och händelser.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/slides"]',
        popover: {
          title: 'Slides',
          description: 'Ett verktyg för att skapa och visa presentationer.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="/color-picker"]',
        popover: {
          title: 'Färgväljare',
          description: 'Ett verktyg för att välja och experimentera med olika färger.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: 'a[routerLink="om-mig"]',
        popover: {
          title: 'Om Mig',
          description: 'Klicka här för att läsa mer om mig och min bakgrund.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '.dark-mode-toggle',
        popover: {
          title: 'Mörkt/Ljust Läge',
          description: 'Använd denna knapp för att växla mellan mörkt och ljust tema.',
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.tour-button',
        popover: {
          title: 'Ta Turen Igen',
          description: 'Du kan alltid klicka på denna knapp för att ta turen igen.',
          side: 'bottom',
          align: 'center'
        }
      },
      {
        popover: {
          title: 'Tack för att du tittade!',
          description: 'Du är nu redo att utforska portföljen och alla verktyg på egen hand. Lycka till!'
        }
      }
    ];

    this.driverObj = driver({
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      steps: steps,
      nextBtnText: 'Nästa',
      prevBtnText: 'Föregående',
      doneBtnText: 'Klar',
      popoverClass: 'driver-popover-custom',
      progressText: '{{current}} av {{total}}',
      onDestroyStarted: () => {
        if (!this.driverObj) {
          return;
        }
        this.driverObj.destroy();
      }
    });

    this.driverObj.drive();
  }

  stopTour(): void {
    if (this.driverObj) {
      this.driverObj.destroy();
      this.driverObj = null;
    }
  }
}
