import { Component, OnInit } from '@angular/core';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';

@Component({
  selector: 'app-add-or-edit-order-sale',
  templateUrl: './add-or-edit-order-sale.component.html',
  styleUrls: ['./add-or-edit-order-sale.component.css']
})
export class AddOrEditOrderSaleComponent implements OnInit {
  
  filtredCustomer;
  orderSale: OrderSaleEntity;
  invoiceNumber:number;
  
  constructor(private customerServicesService : CustomerServicesService,private ordersaleService : OrderSaleServiceService) { }

  ngOnInit(): void {

   

  }
  
  searchPerson(subname) {
    console.log("wazgha")
    this.customerServicesService.getCustomerByUserName(subname).subscribe(
      (response) => {
        this.filtredCustomer = response;
        console.log("wazghaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(this.filtredCustomer)

      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveProvider()
  {
    console.log("aqwxcv")
    this.ordersaleService.addOrderSalesList(this.orderSale, this.filtredCustomer.id).subscribe( data =>{
      console.log("aqwxcv")
      console.log(data);
     
    },
    error => console.log(error)); 
    
  }
  

  /*goToProviderList()
  {
    this.router.navigate(['/Provider'])
  }*/


  onSubmit(){
  console.log("************");
  
    console.log(this.invoiceNumber);
    console.log(this.orderSale);
    console.log(this.filtredCustomer);
    /*let invoice={number:this.invoiceNumber}
    this.orderSale = {invoice:invoice}*/

   
    //console.log(this.orderSale.invoice.number);
    //console.log(this.orderSale);

    this.saveProvider();
    console.log(this.orderSale);
  }



}
