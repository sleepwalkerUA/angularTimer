import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  sec: number = 0;
  min: number = 0;
  interval!: any;
  timerStatus: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  startTimer() {
    if(this.timerStatus == 0){
      this.interval = setInterval(() => {
        if(this.sec < 60) {
          this.sec++;
        } else {
          this.min++;
          if(this.min > 60){
            this.min = 0;
          }
          this.sec = 0;
        }
      },1000)
      this.timerStatus = 1;
    }else{
      clearInterval(this.interval);
      this.sec = 0;
      this.min = 0;
      this.timerStatus = 0;
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
    if(this.timerStatus == 0){
      this.timerStatus = 1;
    }else{
      this.timerStatus = 0;
    }
  }
  
  resetTimer(){
    clearInterval(this.interval);
    this.sec = 0;
    this.min = 0;
    this.interval = setInterval(() => {
      if(this.sec < 60) {
        this.sec++;
      } else {
        this.min++;
        this.sec = 0;
      }
    },1000)
  }
}
