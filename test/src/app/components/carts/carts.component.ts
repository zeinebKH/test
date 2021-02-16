import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../model/cart.model';
import {CartserviceService} from '../../services/cartservice.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  cartData: CartModelServer;

  constructor(public cartService: CartserviceService) { }

  ngOnInit(): void {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
  
  }

}
