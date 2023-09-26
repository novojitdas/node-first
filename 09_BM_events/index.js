const PizzaShop = require('./pizza-shop.js');

const pizzaShop = new PizzaShop();

pizzaShop.on("order",(size,toppings) => {
      console.log(`ordered ${size} pizza with ${toppings}`);
});

pizzaShop.order("order","large","chicken");
pizzaShop.displayOrder();