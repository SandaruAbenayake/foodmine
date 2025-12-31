import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products: Product[] = [
    { id: 'p1', title: 'Margherita Pizza', price: 8.5, image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p2', title: 'Chicken Burger', price: 7.25, image: 'https://media.istockphoto.com/id/1203580318/photo/vegan-meatless-plant-based-protein-chicken-strip-burger-on-a-whole-wheat-bun-with-lettuce.jpg?s=1024x1024&w=is&k=20&c=kRPWU1QibHUA80P3JaLUqQ_g-cVu2-fzT_LepPjqKX0=' },
    { id: 'p3', title: 'Caesar Salad', price: 6.0, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80&crop=faces' },
    { id: 'p4', title: 'Spicy Noodles', price: 5.5, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80&crop=faces' }
  ];

  constructor(private cart: CartService) {}

  // simple UI feedback for debugging / UX
  addedMessage = '';

  addToCart(p: Product) {
    console.log('Home.addToCart', p);
    this.cart.add(p);
    this.addedMessage = `${p.title} added to cart`;
    setTimeout(() => this.addedMessage = '', 1400);
  }
}
