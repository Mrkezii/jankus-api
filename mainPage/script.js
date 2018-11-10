// elements in an array
//var express = require( 'express')
var Item = []
var products = []
var Quantity = []

function addToBag(id) {
  var name = document.getElementById("example-checkbox" + id).value
  Item.push(name);
  var price = document.getElementById("productprice" + id).value
  products.push(parseInt(price));
  var qty = document.getElementById("number" + id).value;
  if ( qty <= 0){alert("Value has to be greater than 1") } 
  else{Quantity.push(parseInt(qty))

  };
  console.log(Item);
  console.log(products);
  console.log(Quantity);
  
}
//function to display cart
function displayCart() {
 
  cartdata = '<table><tr><th>Product Name </th><th> Quantity</th> <th> Price</th><th> Total + Tax(13%) </th></tr>';
  total = 0;
  for (i = 0; i < Quantity.length; i++) {
    total += products[i] * Quantity[i] 
    cartdata += "<tr><td>" + Item[i] + "</td><td>" + Quantity[i] + "</td><td>" + products[i] + "</td><td>" +
      products[i] * Quantity[i] + "</td><td><button onclick ='delElement(" + i + " )'>Delete</button></td><tr> "
  }
  cartdata += '<tr><td></td><td></td><td></td> <td>' + total + '</td></tr></table>'

  document.getElementById('Cart').innerHTML = cartdata
}
function delElement(a) {
  Item.splice(a, 1);
  products.splice(a, 1)
  Quantity.splice(a, 1)
  displayCart();
}
//Purchase Item
function purchaseItem(){ var text;
  if (confirm("Are you sure you want to proceed")) {
      text = "Thanks for Shopping with Us";
  } else {
      text = "Check for More items !";
  }
  document.getElementById("buythis").innerHTML = text;
}

// Increment Function
function increaseValue(productId) {
  let value = parseInt(document.getElementById(productId).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  value > 1;
  document.getElementById(productId).value = value;
}

// decrement function
function decreaseValue(productId) {
  var value = parseInt(document.getElementById(productId).value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? value = 0 : '';
  value--;
  document.getElementById(productId).value = value;
}
function getProducts(){ var now;
   const ul = document.getElementById('buythis');
const url = 'products/test'
//removeChild(ul); // remove list elements if there are any
fetch('products/test')
.then(function(resp) {
  console.log(resp);
  return resp.json();
  })
.then(function(data) {
  console.log(data);
  return data.map(function(Product) {
    let li = createNode('li'),
      span = createNode('span');
    span.innerHTML = Product.message + Product.timeStamp;
    span.setAttribute("title", `ID: ${Product._id}`)
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
})
document.getElementById('inventory').innerHTML = now
} ;

 //document.getElementById("inventory").innerHTML = inventory; } 
