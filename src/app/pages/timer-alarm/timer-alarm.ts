import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Klocka } from '../../shared/klocka/klocka';
import { Projekt } from '../../shared/projekt/projekt';

interface Alarm {
  time: string;
  timeoutId: any;
  active: boolean;
}

@Component({
  selector: 'app-timer-alarm',
  standalone: true,
  imports: [CommonModule, FormsModule, Klocka, Projekt],
  templateUrl: './timer-alarm.html',
  styleUrls: ['./timer-alarm.css']
})
export class TimerAlarm implements OnInit {

  // TIMER
  displayTime = '00:00:00';
  timerHours = 0;
  timerMinutes = 0;
  timerSeconds = 0;
  interval: any;

  // ALARM
  alarms: Alarm[] = [];
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  selectedHour: number = new Date().getHours();
  selectedMinute: number = new Date().getMinutes();

  // LJUD
  alarmAudio = new Audio('/alarm.wav');
  alarmRinging = false;
  ringingMessage = '';

  ngOnInit(): void {}

  // timer
  startTimer(): void {
    clearInterval(this.interval);
    let totalSeconds = this.timerHours * 3600 + this.timerMinutes * 60 + this.timerSeconds;

    if (totalSeconds <= 0) return;

    this.interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(this.interval);
        this.triggerAlarm('Timer klar!');
        return;
      }
      totalSeconds--;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      this.displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  resetTimer(): void {
    clearInterval(this.interval);
    this.displayTime = '00:00:00';
    this.timerHours = 0;
    this.timerMinutes = 0;
    this.timerSeconds = 0;
  }

  // alarm
  addAlarmFromDropdown(): void {
    const alarmTime = `${this.selectedHour.toString().padStart(2, '0')}:${this.selectedMinute.toString().padStart(2, '0')}`;
    this.addAlarm(alarmTime);
  }

  addAlarm(alarmTime: string): void {
    const now = new Date();
    const [hours, minutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date();
    alarmDate.setHours(hours, minutes, 0, 0);

    let diff = alarmDate.getTime() - now.getTime();
    if (diff <= 0) diff += 24 * 60 * 60 * 1000;

    const timeoutId = setTimeout(() => {
      this.triggerAlarm(`Alarm! (${alarmTime})`);
      const idx = this.alarms.findIndex(a => a.time === alarmTime && a.timeoutId === timeoutId);
      if (idx !== -1) this.alarms[idx].active = false;
    }, diff);

    this.alarms.push({ time: alarmTime, timeoutId, active: true });
  }

  toggleAlarm(alarm: Alarm): void {
    if (alarm.active) {
      clearTimeout(alarm.timeoutId);
      alarm.active = false;
    } else {
      const now = new Date();
      const [hours, minutes] = alarm.time.split(':').map(Number);
      const alarmDate = new Date();
      alarmDate.setHours(hours, minutes, 0, 0);
      let diff = alarmDate.getTime() - now.getTime();
      if (diff <= 0) diff += 24 * 60 * 60 * 1000;

      const timeoutId = setTimeout(() => {
        this.triggerAlarm(`Alarm! (${alarm.time})`);
        const idx = this.alarms.findIndex(a => a.time === alarm.time && a.timeoutId === timeoutId);
        if (idx !== -1) this.alarms[idx].active = false;
      }, diff);

      alarm.timeoutId = timeoutId;
      alarm.active = true;
    }
  }

  removeAlarm(alarm: Alarm): void {
    clearTimeout(alarm.timeoutId);
    this.alarms = this.alarms.filter(a => a !== alarm);
  }

  // ljud
  triggerAlarm(message: string): void {
    this.alarmAudio.loop = true;
    this.alarmAudio.currentTime = 0;
    this.alarmAudio.play().catch(err => console.log('Audio error:', err));
    this.alarmRinging = true;
    this.ringingMessage = message;
  }

  stopSound(): void {
    this.alarmAudio.pause();
    this.alarmAudio.currentTime = 0;
    this.alarmRinging = false;
    this.ringingMessage = '';
  }

  onHoursChange(event: any) {
    this.timerHours = Number(event.target.value);
  }

  onMinutesChange(event: any) {
    this.timerMinutes = Number(event.target.value);
  }

  onSecondsChange(event: any) {
    this.timerSeconds = Number(event.target.value);
  }
}
