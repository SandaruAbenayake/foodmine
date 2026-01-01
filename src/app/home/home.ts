import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService, Product } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  products: Product[] = [];

  constructor(private cart: CartService, private http: HttpClient) {}

  // simple UI feedback for debugging / UX
  addedMessage = '';

  ngOnInit() {
    this.http.get<any[]>('/api/items').subscribe(items => {
      this.products = items.map(i => ({
        id: String(i.id),
        title: i.name,
        price: Number(i.price) || 0,
        image: i.image || undefined,
        description: i.description || undefined
      }));
    }, err => {
      console.error('Failed to load products', err);
    });
  }

  addToCart(p: Product) {
    console.log('Home.addToCart', p);
    this.cart.add(p);
    this.addedMessage = `${p.title} added to cart`;
    setTimeout(() => this.addedMessage = '', 1400);
  }
}
