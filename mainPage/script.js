let cart = [];

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

function addToBag(id) {
  var name = document.getElementById("example-checkbox" + id).value;
  var price = document.getElementById("productprice" + id).value;
  var qty = document.getElementById("number" + id).value;
  if (qty <= 0) alert("Value has to be greater than 1");
  else {
    let newProduct = new Product(name, price, qty);
    cart.push(newProduct);
    console.log("cart", cart);
  }
}

function getProd() {
  //const ul = document.getElementById("buythis");
  // const url = 'products/create'
  //removeChild(ul); // remove list elements if there are any
  const section = document.getElementById("view");
  fetch("products/test")
    .then(function(resp) {
      // console.log("response", resp);
      return resp.json();
    })
    .then(function(products) {
      console.log("response", products);
      const list = document.createElement("form");
      // const table = doum
      products.map(function(product) {
        console.log(product.Item);
        const container = document.createElement("div");
        const titleInput = document.createElement("input");
        const priceInput = document.createElement("input");
        const quantityInput = document.createElement("input");

        titleInput.type = "text";
        titleInput.value = product.Item;

        priceInput.type = "number";
        priceInput.labels = "Price";
        priceInput.value = product.price;

        quantityInput.type = "number";
        quantityInput.value = product.Quantity;

        // item.style.display = "block";

        // item.appendChild(
        //   document.createTextNode(`${product.Item} - ${product.price}`)
        // );
        container.append(titleInput, priceInput, quantityInput);
        list.appendChild(container);
      });
      section.append(list);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// window.onload = getProducts;

const save = () => {
  //function for first button
  var time = new Date();
  var val = document.getElementById("product1").value;
  //val = encodeHTML(val); // sanitizing user input
  var pri = document.getElementById("price1").value;
  // pri =encodeHTML(pri);
  var qty = document.getElementById("Quantity1").value;
  // qty = encodeHTML(qty);

  fetch("products/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Item: val, price: pri, Quantity: qty })
  }).then(getProducts()); // load the new list
};
