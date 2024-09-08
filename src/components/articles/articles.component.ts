import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  currentPage: number = 1; // Start from the first article
  articles = [
    {id: 1, title: "ஹரே கிருஷ்ண மஹா மந்திரத்தை ஜபிப்போம் வாருங்கள்."},
    {id: 2, title: "அமைதிக்கான வழி."},
    {id: 3, title: "பக்திவேதாந்த ஸ்வாமி பிரபுபாதா"},
    {id: 4, title: "கிருஷ்ண உணர்வு இயக்கம் என்றால் என்ன?"},
    {id: 5, title: "ஹரே கிருஷ்ண இயக்கத்தின் தோற்றம்"}
  ]; // Array representing each article
  nextPage() {
    if (this.currentPage < this.articles.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }



}
