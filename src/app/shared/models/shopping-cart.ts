import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";


export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (let pId in itemsMap) {
      let item = itemsMap[pId];
      this.items.push(new ShoppingCartItem({...item, $key: pId}));
    }
  }

  getQuantity(product: Product) {
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get productIds() {
    return Object.keys(this.items);
  }

  get totalPrice() {
    let total = 0;
    for(let pId in this.items) {
      total += this.items[pId].totalPrice;
    }
    return total;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count;
  }
}