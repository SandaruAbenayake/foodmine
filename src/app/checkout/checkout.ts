import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout {
  name = '';
  address = '';
  constructor(private cart: CartService, private router: Router) {}

  placeOrder() {
    // Simulate order placement
    this.cart.clear();
    this.router.navigate(['/thankyou']);
  }
}
