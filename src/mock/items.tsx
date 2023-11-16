import { menuItems } from "./menuItems";

class Items {
  getItems() {
    const items = menuItems
    return items
  }

  getOneItem(id:any) {
    let item = menuItems[id - 1]
    return item
  }
}

export const itemsClass = new Items