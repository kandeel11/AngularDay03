import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FocusContent } from '../../directive/focus-content';
import { ScaleImage } from '../../directive/scale-image';
import { ThemeChange } from '../../directive/theme-change';
import { DescriptionSlicePipe } from '../../pipes/description-slice-pipe';
import { FormsModule } from '@angular/forms';
import { StaticData } from '../../Services/static-data';
import { BtnDynamic } from '../btn-dynamic/btn-dynamic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FocusContent,ScaleImage,ThemeChange,CurrencyPipe,DescriptionSlicePipe,TitleCasePipe,FormsModule,BtnDynamic],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Products implements OnChanges, AfterContentInit {
  private readonly data = inject(StaticData);
  private readonly router = inject(Router);

  @Input() selectedCategory:string='all';
   @Output() total=new EventEmitter<number>();
   
   // ContentChild example
   @ContentChild('projectedContent') projected!: ElementRef;

   filteredProducts:Iproduct[] = this.data.getProducts();
    totalprice:number=0;

  ngAfterContentInit(): void {
    console.log('Projected element (ContentChild):', this.projected?.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedCategory = changes['selectedCategory'].currentValue;
    this.prodfilter();
  }
 increaseQuantity(product: Iproduct): void {
    if (!product.quantity) {
      product.quantity = 1;
    }
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  decreaseQuantity(product: Iproduct): void {
    if (!product.quantity) {
      product.quantity = 1;
    }
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
 buyProduct(inp: HTMLInputElement,p:Iproduct): void {
  const quantity = Number(inp.value);
  if(quantity>0 && quantity<=p.stock){
  this.totalprice+=quantity*p.price;
  this.total.emit(this.totalprice);
  p.stock-=quantity;
  p.quantity = 1;
  inp.value='1';
  }else{
    alert("Please enter a valid quantity (1-" + p.stock + ")");
  }
}

goToDetails(id: number): void {
  this.router.navigate(['/products', id]);
}

prodfilter(): void {
  if(this.selectedCategory==="all"){
    this.filteredProducts=this.data.getProducts();
  }else{
    this.filteredProducts=this.data.filterByCategory(this.selectedCategory);
  }
}

}
