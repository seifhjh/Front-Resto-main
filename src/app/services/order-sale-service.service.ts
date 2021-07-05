import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSaleServiceService {

  private baseURL=  "http://localhost:8080/api/clients";

  constructor(private http: HttpClient) { }

  getOrderSalesList() : Observable<OrderSaleEntity[]>{
    return this.http.get<OrderSaleEntity[]>(`${this.baseURL}`);
  }
  //
  addOrderSalesList(data:OrderSaleEntity, id:number) : Observable<OrderSaleEntity>{

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<OrderSaleEntity>(`${this.baseURL}`+'/'+id,data, { headers: headers });
  }
  //
  deleteOrderSale(id : number):Observable<Object>
  {
    return this.http.delete(`${this.baseURL}/${id}`);

  }
}
