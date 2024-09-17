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
 
  viewMode!: number;
  audioData = [
    {id: 1, header: 'ஶ்ரீமத் பகவத்கீதை', subheader: 'தமிழில் ஆடியோ!', image: '../../assets/image/bgaudio.png', content: 'ஸ்ரீமத் பகவத் கீதை சமஸ்கிருத ஸ்லோகம் மற்றும் அதனுடைய தமிழ் மொழிபெயர்ப்பு என இரண்டையும் இந்த ஆடியோ பதிவில் கொடுத்துள்ளோம். தினமும் கேட்டு பகவானின் ஞானத்தை பெறுங்கள்'},
    {id: 2, header: 'உபன்யாசம்', subheader: 'தமிழில் ஆடியோ!', image: '../../assets/image/bgaudio.png', content: 'ஸ்ரீமத் பகவத் கீதை சமஸ்கிருத ஸ்லோகம் மற்றும் அதனுடைய தமிழ் மொழிபெயர்ப்பு என இரண்டையும் இந்த ஆடியோ பதிவில் கொடுத்துள்ளோம். தினமும் கேட்டு பகவானின் ஞானத்தை பெறுங்கள்'},
    {id: 3, header: 'ஹரே கிருஷ்ண கீர்த்தனைகள்', subheader: 'தமிழில் ஆடியோ!', image: '../../assets/image/bgaudio.png', content: 'ஸ்ரீமத் பகவத் கீதை சமஸ்கிருத ஸ்லோகம் மற்றும் அதனுடைய தமிழ் மொழிபெயர்ப்பு என இரண்டையும் இந்த ஆடியோ பதிவில் கொடுத்துள்ளோம். தினமும் கேட்டு பகவானின் ஞானத்தை பெறுங்கள்'},
    {id: 4, header: 'ஆரத்தி பாடல்கள்', subheader: 'தமிழில் ஆடியோ!', image: '../../assets/image/bgaudio.png', content: 'ஸ்ரீமத் பகவத் கீதை சமஸ்கிருத ஸ்லோகம் மற்றும் அதனுடைய தமிழ் மொழிபெயர்ப்பு என இரண்டையும் இந்த ஆடியோ பதிவில் கொடுத்துள்ளோம். தினமும் கேட்டு பகவானின் ஞானத்தை பெறுங்கள்'},
  ]


  goToAudio(id:number){
    this.viewMode = id;
  }
}
