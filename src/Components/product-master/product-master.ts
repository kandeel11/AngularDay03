import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Models/icatogery';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-master',
  imports: [Products,FormsModule,CurrencyPipe],
  templateUrl: './product-master.html',
  styleUrl: './product-master.css',
})
export class ProductMaster implements AfterContentInit,AfterContentChecked, AfterViewInit {
  CategoryList :ICategory[];
  selectedCategory:string;
  totalPrice:number=0;
  
  // ViewChild examples
  @ViewChild('myHeading') heading!: ElementRef;
  @ViewChild(Products) productsComp!: Products;

  constructor() {
    this.CategoryList = [
      { id: 0, name: 'All', slug: 'all' },
  { id: 1, name: 'Beauty & Cosmetics', slug: 'beauty' },
  { id: 2, name: 'Fragrances', slug: 'fragrances' },
  { id: 3, name: 'Furniture', slug: 'furniture'},
  { id: 4, name: 'Groceries', slug: 'groceries' }
];
    this.selectedCategory = 'all';
  } 

  ngAfterViewInit(): void {
    console.log('DOM Element using ViewChild:', this.heading.nativeElement);
    console.log('Child Component using ViewChild:', this.productsComp);
    
    this.heading.nativeElement.style.border = '2px solid red';
  }

  ngAfterContentChecked(): void {
  }
  ngAfterContentInit(): void {
    console.log("Content initialized");
  }
  totalprice(total:number){
    this.totalPrice=total;
  }

}
