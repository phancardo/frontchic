import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: any[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  loadCart() {
    this.items = this.cartService.getItems();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
    this.loadCart();
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
    this.loadCart();
  }

  removeItem(product: any) {
    this.cartService.removeItem(product);
    this.loadCart();
  }
}
