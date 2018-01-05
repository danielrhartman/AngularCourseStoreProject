import { Product } from '../../../shared/models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  filter(query: string) {
    //console.log(query);
    this.filteredProducts = (query) ?
      this.products.filter(p =>
        p.title.toLowerCase().includes(query.toLocaleLowerCase())) :
        this.products;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
