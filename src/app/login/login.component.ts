import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  qttstock : string | null = '';

  constructor(private router: Router){

  }

  linkhome(username: string, password: string){
    console.log('home perso');
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
    if (username === 'frondon' && password === '1234') {
      username = "Frondon sacquet";
      localStorage.setItem('currentUser', username);
      //localStorage.setItem('currentUser', qttStock);
      //console.log(username);
      //window.location.reload();
      this.router.navigate(['/home']);
    } else {
      console.error('Nom d\'utilisateur ou mot de passe incorrect');
    }
    
  }
}
