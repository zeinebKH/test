import { Injectable } from '@angular/core';
import {CartModelPublic, CartModelServer} from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartDataClient: CartModelPublic = {
    subData: [{
      incart: 0,
      id: 0}],
    total: 0
  };
  private cartDataServer: CartModelServer = {
    data: [{
      subject: undefined,
      numInCart: 0}],
    total: 0
  };

  constructor() { }
}
