import { Component, OnInit } from '@angular/core';
import { Products } from './amazon.model';

@Component({
  selector: '.app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // prctice variables
  public sub =  "Sujit";
  public message =  "";
  public isChildShow = false;
  methodCalledByChild(event){
    this.message = event;
  }

// All variables 
  title="Amazon"
  shopStatus:boolean = false;
  cartStatus:boolean = false;
  getFeedback:boolean = false;
  homePage:boolean = true;
  total:number= 0;
  cartCount:number = 0;

  //  Arrays
  ProductList:Products[]=[
    {"id":1,"name":"chappal",price:100,image:"assets/chappal.jpg"},
    {"id":2,"name":"mobile",price:300,image:"assets/mobile.jpg"},
    {"id":3,"name":"agarbatti",price:200,image:"assets/agarbatti.jpg"},
    {"id":4,"name":"handwash",price:400,image:"assets/handwash.jpg"},
    {"id":5,"name":"saban",price:100,image:"assets/saban.jpg"},
    {"id":6,"name":"headphones",price:200,image:"assets/saban.jpg"},
    {"id":7,"name":"ambavadi",price:300,image:"assets/ambawadi.jpg"},
    {"id":8,"name":"zadu",price:100,image:"assets/zadu.jpg"},
    {"id":9,"name":"pant",price:200,image:"assets/pant.jpg"},
    {"id":10,"name":"chhatri",price:300,image:"assets/chhatri.jpg"}

  ]

  CartList:Products[]=[];

  // functions
  startShopping(index){

    switch(index){

      case 1:
        console.log("shopping start");
        this.shopStatus=true;
        this.cartStatus=false;
        break;

        case 2:
            console.log("cart opened");
            this.cartStatus = true;
            this.shopStatus = false;
          break;
    }
  }

  resetEverything(){
    this.shopStatus=false;
  }

  addTocart(item){

    this.cartCount =  this.CartList.push(item);
    console.log(this.CartList.length);
    console.log(item);
    this.total = this.total+item.price;
  }
  removeItem(item){

    for( var i = 0; i < this.CartList.length; i++){ 
      if ( this.CartList[i] == item) {
        this.CartList.splice(i, 1); 
        this.total = this.total-item.price;
        console.log(item.name);
      }
   }
    // this.CartList.pop();
    this.cartCount = this.CartList.length;
  }
  clearCart(){
    console.log("clearing cart");
    
    this.CartList=[];
    this.cartCount = this.CartList.length;
    this.total = 0;
  }

  checkOut(){
    alert("Cart will be cleared")
    this.cartStatus= false;
    this.shopStatus = false;
  }

  OpenChild(){
this.isChildShow = true;
this.homePage = false;
  }
}
