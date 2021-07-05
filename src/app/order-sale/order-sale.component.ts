import { Component, OnInit } from '@angular/core';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-sale',
  templateUrl: './order-sale.component.html',
  styleUrls: ['./order-sale.component.css']
})
export class OrderSaleComponent implements OnInit {

  orderSales: OrderSaleEntity [] ;
  displayedColumns: string[] = ['id', 'dateNaissance', 'nom', 'prenom', 'courriel','telephone', 'actions'];




  constructor(private orderSaleService: OrderSaleServiceService) { }

  ngOnInit(): void {
    this.getOrderSales();

  }
  private getOrderSales() {
   this.orderSaleService.getOrderSalesList().subscribe(e => {
    this.orderSales = e
    //console.log('yamamamamamamamamamama')
    console.log(e)
   })
  }


  deleteOrderSale(number: number) {
    console.log('520')
    this.orderSaleService.deleteOrderSale(number).subscribe( data => {
      console.log('550')
      this.getOrderSales();
    })
  }


}
