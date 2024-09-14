import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  bgaudio: boolean = false;
  goToAudio(){
    this.bgaudio = true;
  }
}
