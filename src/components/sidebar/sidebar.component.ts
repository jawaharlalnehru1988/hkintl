import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navigationItems = [
    { label: 'Articles', route: '/article' },
    { label: 'Audios', route: '/audio' },
    { label: 'Videos', route: '/video' },
    { label: 'Lectures', route: '/lecture' },
    { label: 'Bhagavad Gita', route: '/bhagavadgita' },
    { label: 'Ekadasi Glorious', route: '/ekadasi' }
  ];
}
