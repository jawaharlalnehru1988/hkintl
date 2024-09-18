import { Component } from '@angular/core';
interface Event {
  date: string;
  name: string;
}
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: Event[] = [
    { date: '11-Sep-2024', name: 'Janmashtami Celebration' },
    { date: '15-Sep-2024', name: 'Radha Ashtami' },
    { date: '18-Sep-2024', name: 'Bhagavad Gita Recitation' },
    { date: '21-Sep-2024', name: 'Krishna Kirtan Night' },
    { date: '25-Sep-2024', name: 'Vishnu Sahasranama Chanting' },
    { date: '30-Sep-2024', name: 'Krishna Consciousness Workshop' }
  ];
}
