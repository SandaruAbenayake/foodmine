import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css']
})
export class Blogs {
  posts = [
    { id: 'b1', title: '5 Quick Lunches', excerpt: 'Quick, healthy lunches you can make in under 15 minutes.' },
    { id: 'b2', title: 'Regional Flavors', excerpt: 'Exploring local tastes and where to find them.' }
  ];
}
