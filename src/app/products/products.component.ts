// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { CategoryEntity } from 'app/models/category-entity.model';
import { ProductEntity } from 'app/models/product-entity.model';
// import { CategoryService } from 'app/productService/category.service';
import { ProductServiceService } from 'app/productService/product-service.service';
import { Location } from '@angular/common';

import { element } from 'protractor';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductServiceService]
})


export class ProductsComponent implements OnInit {

  productForm = new FormGroup({}); // --> definition formulaire

  // les chapms du formulaire
  product: string[] = [
      'numero',
    'nbCouvert',
    'type',
    'supplement',
    'actions'


  ];

  // affichage
  displayedColumns: string[] = ['numero','nbCouvert',
    'type',
    'supplement','actions'];
  showForm: boolean;
  // categories: CategoryEntity[];
  // selectedCategory: CategoryEntity;
  isUpdate: boolean;
  itemToUpdate: number;
  products: ProductEntity [] ;

  constructor(private productServiceService: ProductServiceService) {}
  ngOnInit(): void { // methode va declancher lors l'ecution du composant
  this.showForm = false


 /* this.categoryService.getCategories().subscribe(e=>{
    this.categories=e
  })*/




    this.productServiceService.getProduct().subscribe(e => {
this.products = e






    })



  }

  saveProduct() {
    const productForSave = new ProductEntity()
    productForSave.nbCouvert = this.productForm.controls['nbCouvert'].value
    productForSave.type = this.productForm.controls['type'].value
    productForSave.supplement = this.productForm.controls['supplement'].value

    // console.log(this.productForm.controls["category"].value)
    if (this.isUpdate) {
      productForSave.numero = this.itemToUpdate
      this.productServiceService.updateProduct( productForSave).subscribe(e => {
          this.ngOnInit()
        })
    } else {
    this.productServiceService.addProduct(productForSave).subscribe(e => {


      this.ngOnInit()


    }
      )
  }
  }

  addEntry(element) {
    if (element !== null) {
      console.log(element)
      this.showForm = true
      this.isUpdate = true;
      this.itemToUpdate = element.numero
      this.product.forEach(col => {
        this.productForm.addControl(col, new FormControl());

      });

      this.productForm.controls['nbCouvert'].setValue(element.nbCouvert)
      this.productForm.controls['type'].setValue(element.type)
      this.productForm.controls['supplement'].setValue(element.supplement)

    } else {
    this.productForm.reset()
    this.showForm = true
    this.isUpdate = false;
    this.product.forEach(col => {
      this.productForm.addControl(col, new FormControl());

    });
  }
}

  deleteProduct(item) {
console.log('item')
console.log(item)

this.productServiceService.deleteProduct(item.numero).subscribe(e => {
    console.log(e)
    this.ngOnInit()
  })
}



go() {
    this.showForm = false
  }


}
