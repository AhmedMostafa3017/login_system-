import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
constructor(private httpkhloud : HttpClient){}


getAllData(){
  return this.httpkhloud.get('https://fakestoreapi.com/products')
}
loginUser(object:any){
  return this.httpkhloud.post('linkssss', object)
}
deleteItem(id:number){
  return this.httpkhloud.delete(`https://fakestoreapi.com/products/${id}`)
}
}
