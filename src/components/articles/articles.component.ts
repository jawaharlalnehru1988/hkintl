import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  currentPage: number = 0; // Start from the first article
  articles = [1, 2, 3, 4, 5, 6, 7]; // Array representing each article
  nextPage() {
    
    if (this.currentPage < this.articles.length - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
