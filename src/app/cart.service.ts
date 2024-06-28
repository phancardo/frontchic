import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {
    this.loadItems();
  }

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }
    this.saveItems();
  }

  getItems() {
    return this.items;
  }

  increaseQuantity(product: any) {
    const item = this.items.find(item => item.id === product.id);
    if (item) {
      item.quantity++;
    }
    this.saveItems();
  }

  decreaseQuantity(product: any) {
    const item = this.items.find(item => item.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(product);
    }
    this.saveItems();
  }

  removeItem(product: any) {
    this.items = this.items.filter(item => item.id !== product.id);
    this.saveItems();
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private saveItems() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  private loadItems() {
    if (typeof localStorage !== 'undefined') {
      const savedItems = localStorage.getItem('cartItems');
      if (savedItems) {
        this.items = JSON.parse(savedItems);
      }
    }
  }
}
