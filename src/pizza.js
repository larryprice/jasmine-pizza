function Pizza() {
  var size, toppings, orderSuccess;

  function findToppings(style, extras) {
    toppings = extras ? extras : [];

    switch (style) {
      case ("meat lovers"):
        toppings.push("ham", "pepperoni", "bacon", "sausage");
        break;
      case ("veg head"):
        toppings.push("onion", "tomato", "pepper", "olive");
        break;
      case ("supreme"):
        toppings.push("pepperoni", "onion", "sausage", "olive");
        break;
    }
  }

  this.getStyles = function() {
    return ["meat lovers", "veg head", "supreme"];
  }

  this.getToppings = function() {
    return toppings;
  };

  this.getCost = function() {
    return size/2 + toppings.length * .5;
  }

  this.sendOrder = function() {
    $.ajax({
      type: "POST",
      url: "http://onlinepizza.se/api/rest?order.send",
      success: function() {
        orderSuccess = true;
      },
      error: function() {
        orderSuccess = false;
      }
    });
  }

  this.orderSent = function() {
    return orderSuccess;
  }

  this.initialize = function(pizzaSize, style, extras) {
    size = pizzaSize;
    findToppings(style, extras);
  };
}