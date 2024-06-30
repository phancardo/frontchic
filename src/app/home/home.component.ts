import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentUser: string | null = '';
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    // Récupérer les informations du localStorage
    this.currentUser = localStorage.getItem('currentUser');
    console.log('initier');
  }
  register(){
    this.router.navigate(['/register']);
  }
  login() {
    this.router.navigate(['/login']);
  }
  products: Product[] = [
    { id: 1, name: 'Phial de Galadriel', price: 250, oldPrice: 450, imageUrl: '../../assets/images/slider/bg/1.jpg' },
    { id: 2, name: 'Anneau Unique', price: 1000, oldPrice: 1600, imageUrl: '../../assets/images/slider/bg/Anneau Unique.jpg' },
    { id: 3, name: 'Epée d Aragorn', price: 150, oldPrice: 160, imageUrl: '../../assets/images/slider/bg/Epée d Aragorn.jpeg' },
    { id: 4, name: 'Arc de Legolas', price: 180, oldPrice: 200, imageUrl: '../../assets/images/slider/bg/Arc de Legolas.jpg' },
    { id: 5, name: 'Grimoire de Gandalf', price: 200, oldPrice: 270, imageUrl: '../../assets/images/slider/bg/Grimoire de Gandalf.jpg' },
    { id: 6, name: 'Cornemuse de Boromir', price: 80, oldPrice: 120, imageUrl: '../../assets/images/slider/bg/Cornemuse de Boromir.jpg' },
    { id: 7, name: 'Hache de Gimli', price: 120, oldPrice: 180, imageUrl: '../../assets/images/slider/bg/Hache de Gimli.jpeg' },
    { id: 8, name: 'Cotte de Mithril', price: 500, oldPrice: 620, imageUrl: '../../assets/images/slider/bg/3.jpg' },
    { id: 9, name: 'Cape d invisibilité', price: 300, oldPrice: 530, imageUrl: '../../assets/images/slider/bg/2.jpg' },
    { id: 10, name: 'Lembas', price: 50, oldPrice: 67, imageUrl: '../../assets/images/slider/bg/Lord Of The Rings Lembas Bread Recipe - HungryForever Food Blog.jpg' },
  ];

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
