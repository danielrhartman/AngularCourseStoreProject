import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {
  categories$;
  id;
  product = {};

  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.categories$ = categoryService.getAll();

    this.id = route.snapshot.paramMap.get('id');
  
    if(this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  save() {
    if(this.id){
      this.productService.update(this.id, this.product);
    }else{
      this.productService.create(this.product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);      
  }

}
