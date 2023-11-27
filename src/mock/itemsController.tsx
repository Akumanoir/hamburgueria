import { menuItems } from "./menuItems";

class ItemsController {
  private items = menuItems;
  private shopCart = new Array();

  getItems() {
    return this.items;
  }

  getPromotionItems() {
    let itemsOnPromotion: any = [];

    this.items.map((items) => {
      if (items.promotion === true) {
        itemsOnPromotion.push(items);
      }
    });

    return itemsOnPromotion;
  }

  getOneItem(id: number) {
    // const index = this.items.findIndex((item: { id: number }) => item.id === id);
    let item = this.items[id - 1];
    return item;
  }

  createShoppingCart(id: number, image: string, name: string, value: number) {
    this.shopCart.push({
      id: id,
      image: image,
      name: name,
      value: value,
    });
  }

  getShoppingCart() {
    return this.shopCart;
  }

  removeItemFromCart(index: number) {
    this.shopCart.splice(index, 1);
    return this.shopCart;
  }

  getTotalValue() {
    let totalValue = 0;

    this.shopCart.map((shopCart) => {
      totalValue += shopCart.value;
    });

    return totalValue.toFixed(2);
  }
}

export const itemsClass = new ItemsController();
