import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject, ChangeDetectorRef } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FocusContent } from '../../directive/focus-content';
import { ScaleImage } from '../../directive/scale-image';
import { ThemeChange } from '../../directive/theme-change';
import { DescriptionSlicePipe } from '../../pipes/description-slice-pipe';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaticData } from '../../Services/static-data';
import { BtnDynamic } from '../btn-dynamic/btn-dynamic';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FocusContent,ScaleImage,ThemeChange,CurrencyPipe,DescriptionSlicePipe,TitleCasePipe,FormsModule,ReactiveFormsModule,BtnDynamic],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Products implements OnChanges, AfterContentInit {
  private readonly data = inject(StaticData);
  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  @Input() selectedCategory:string='all';
  @Output() total=new EventEmitter<number>();
   
  // ContentChild example
  @ContentChild('projectedContent') projected!: ElementRef;

  filteredProducts:Iproduct[] = this.data.getProducts();
  totalprice:number=0;

  // Admin form
  productForm: FormGroup;
  isEditing = false;
  editingProductId: number | null = null;
  showAdminForm = false;

  constructor() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discountPercentage: [0, Validators.min(0)],
      stock: [0, [Validators.required, Validators.min(0)]],
      category: ['beauty', Validators.required],
      images: ['https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp', Validators.required]
    });
  }

  ngAfterContentInit(): void {
    console.log('Projected element (ContentChild):', this.projected?.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedCategory = changes['selectedCategory'].currentValue;
    this.prodfilter();
  }

  toggleAdminForm(): void {
    this.showAdminForm = !this.showAdminForm;
    if (!this.showAdminForm) {
      this.resetForm();
    }
  }

  editProduct(p: Iproduct): void {
    this.isEditing = true;
    this.editingProductId = p.id;
    this.showAdminForm = true;
    this.productForm.patchValue({
      title: p.title,
      description: p.description,
      price: p.price,
      discountPercentage: p.discountPercentage,
      stock: p.stock,
      category: p.category,
      images: p.images[0] // just mapping the first image for simplicity
    });
  }

  deleteProduct(p: Iproduct): void {
    if (confirm(`Are you sure you want to delete ${p.title}?`)) {
      this.data.deleteProduct(p.id);
      this.prodfilter();
      this.cdr.markForCheck();
    }
  }

  onSubmitAdminForm(): void {
    if (this.productForm.invalid) return;

    const formVal = this.productForm.value;
    const mappedProduct: Omit<Iproduct, 'id'> = {
      ...formVal,
      rating: 0,
      images: [formVal.images]
    };

    if (this.isEditing && this.editingProductId) {
      this.data.updateProduct(this.editingProductId, mappedProduct);
    } else {
      this.data.addProduct(mappedProduct);
    }

    this.prodfilter();
    this.resetForm();
    this.cdr.markForCheck();
  }

  resetForm(): void {
    this.isEditing = false;
    this.editingProductId = null;
    this.showAdminForm = false;
    this.productForm.reset({
      price: 0,
      discountPercentage: 0,
      stock: 0,
      category: 'beauty',
      images: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp'
    });
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
