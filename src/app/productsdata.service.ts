import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  constructor() { }

  products = [
    {
      id: "1",
      name: "iPhone",
      price: "100",
      ven_id: "001",
      cat_id: "011",
    },
    {
      id: "2",
      name: "Coca Cola",
      price: "100",
      ven_id: "002",
      cat_id: "014",
    },
    {
      id: "3",
      name: "Vans",
      price: "300",
      ven_id: "003",
      cat_id: "013",
    },
   
    {
      id: "4",
      name: "Leather Jacket",
      price: "400",
      ven_id: "004",
      cat_id: "012",
    },
  
    {
      id: "5",
      name: "Polo Shirt",
      price: "500",
      ven_id: "004",
      cat_id: "012",
    },

   
   
    ];
  
 vendors = [
  { id: "001", firstName: "Save", lastName: "Mart", contactNumber: "051-12121" },
  { id: "002", firstName: "Asian", lastName: "Mall", contactNumber: "051-23232" },
  { id: "003", firstName: "CSD",   lastName: "Mart", contactNumber: "051-34343" },
  { id: "004", firstName: "Punjab", lastName: "C&C", contactNumber: "051-45454" }
 ];

 categories = [
  { id: "011", name: "Electronics", status: true },
  { id: "012", name: "Clothing", status: false },
  { id: "013", name: "Shoes", status: true },
  { id: "014", name: "Food and Beverage", status: true }
 ]

 

 addProduct(product: any) {
   this.products.push(product);
 }
 
}
