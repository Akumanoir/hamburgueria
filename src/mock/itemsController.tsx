import { menuItems } from "./menuItems";

class ItemsController {
  private items = menuItems;
  private shopCart = new Array();

  getItems() {
    let itemsList: any = [];

    this.items.map((items) => {
      if (items.promotion === true) {
        const promotionCalculation: number = Math.abs((items.value * (items.promotionValue / 100)) - items.value);
        itemsList.push({ ...items, promotionCalculation: promotionCalculation.toFixed(2)});
      } else {
        itemsList.push(items)
      }

    });
    
    return itemsList;
  }

  // getPromotionValue(id: number) {
  //   const index = this.items.findIndex((item: { id: number }) => item.id === id);
  //   if (this.items[index].promotion === true) {
  //       const promotionCalculation: number = Math.abs(
  //         this.items[index].value * (this.items[index].promotionValue / 100) - this.items[index].value
  //       );

  //       return promotionCalculation.toFixed(2);
  //   }
  // }

  getOneItem(id: number) {
    // const index = this.items.findIndex((item: { id: number }) => item.id === id);
    let item;

    if (this.items[id - 1].promotion === true) {
      const promotionCalculation: number = Math.abs(
        this.items[id - 1].value * (this.items[id - 1].promotionValue / 100) -
          this.items[id - 1].value
      );
      item = {...this.items[id - 1], promotionCalculation: (promotionCalculation.toFixed(2))}
    } else {
      item = this.items[id - 1];
    }


    return item;
  }

  createShoppingCart(id: number, image: string, name: string, value: number, promotion: boolean, promotionCalculation: number) {
    this.shopCart.push({
      id: id,
      image: image,
      name: name,
      value: value,
      promotion: promotion,
      promotionCalculation: promotionCalculation,
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
    let value = 0;
    let promotionValue = 0;

    this.shopCart.map((shopCart) => {
      if (shopCart.promotion === true) {
        promotionValue += Number(shopCart.promotionCalculation)
      } else {
        value += shopCart.value;
      }
    });

    totalValue = value + promotionValue

    return totalValue.toFixed(2);
  }
}

export const itemsClass = new ItemsController();
