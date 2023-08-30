import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productArr: any = []
  object = {
    name: 'khloud',
    password: 123,
    lastname: 'rammah'
  }
  constructor(private khloud: ProductsService) {

  }
  ngOnInit() {
    this.getAll()
  }
  getAll() {
    this.khloud.getAllData().subscribe(xyz => {
      console.log(xyz)
      this.productArr = xyz
    })
  }
  sendData() {
    this.khloud.loginUser(this.object).subscribe(res => {
      console.log("kkk")
    })
  }
  deleteProduct(id: any) {
    console.log(id)

    this.khloud.deleteItem(id).subscribe((res: any) => {
      console.log(res.id)

    })

  }

   arr =[1,2,3]
   copyarr=this.arr
  //  copyarr.push(3)   // [3,1,2,3]
}
