import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  constructor(public cart: CartService) {}
}
