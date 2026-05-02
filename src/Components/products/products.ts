import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, output, SimpleChanges, ContentChild, AfterContentInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CurrencyPipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FocusContent } from '../../directive/focus-content';
import { ScaleImage } from '../../directive/scale-image';
import { ThemeChange } from '../../directive/theme-change';
import { DescriptionSlicePipe } from '../../pipes/description-slice-pipe';
import { FormsModule } from '@angular/forms';
import { StaticData } from '../../Services/static-data';
import { BtnDynamic } from '../btn-dynamic/btn-dynamic';

@Component({
  selector: 'app-products',
  imports: [NgClass,NgStyle,FocusContent,ScaleImage,ThemeChange,CurrencyPipe,DescriptionSlicePipe,TitleCasePipe,FormsModule,BtnDynamic],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges, AfterContentInit {
  @Input() selectedCategory:string='all';
   @Output() total=new EventEmitter<number>();
   
   // ContentChild example
   @ContentChild('projectedContent') projected!: ElementRef;

   filteredProducts:Iproduct[];
    totalprice:number=0;
  constructor(private Data:StaticData) {
  
    this.filteredProducts = this.Data.allProducts();
}

  ngAfterContentInit(): void {
    console.log('Projected element (ContentChild):', this.projected?.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedCategory = changes['selectedCategory'].currentValue;
    this.prodfilter();
  }
increaseQuantity(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  decreaseQuantity(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
buyProduct(inp:any,p:Iproduct){
  if(inp.value>0 && inp.value<=p.stock){
  this.totalprice+=inp.value*p.price;
  this.total.emit(this.totalprice);
  p.stock-=inp.value;
  inp.value=0;
  }else{
    alert("Please enter a valid quantity (1-" + p.stock + ")");
  }
}
prodfilter(){
  if(this.selectedCategory==="all"){
    this.filteredProducts=this.Data.allProducts();
  }else{
    this.filteredProducts=this.Data.filterByCategory(this.selectedCategory);
  }
}

}

