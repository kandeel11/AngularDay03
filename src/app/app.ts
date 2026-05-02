import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../Components/home/home';
import { Footer } from '../Components/footer/footer';
import { Header } from '../Components/header/header';
import { Products } from '../Components/products/products';
import { ProductMaster } from '../Components/product-master/product-master';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home,ProductMaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
  
}
