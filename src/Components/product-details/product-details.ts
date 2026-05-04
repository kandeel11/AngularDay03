import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproduct } from '../../Models/iproduct';
import { StaticData } from '../../Services/static-data';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, TitleCasePipe, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
 
constructor(private route: ActivatedRoute, private data: StaticData, private destroyRef: DestroyRef) {
}
  product: Iproduct | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const productId = Number(params.get('id'));
        if (Number.isNaN(productId)) {
          this.product = undefined;
          return;
        }

        this.product = this.data.getProductById(productId);
      });
  }
}
