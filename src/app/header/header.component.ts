import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: any[] = [];
  user: string | null = '';
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

  deconnection() {
    // Supprimer les informations du localStorage lors de la déconnexion
    localStorage.removeItem('currentUser');
    window.location.reload();
    //this.router.navigate(['/home']);
    // Autres logiques de déconnexion
  }

  loadCart() {
    this.items = this.cartService.getItems();
    this.user = localStorage.getItem('currentUser');
    console.log('initier');
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
