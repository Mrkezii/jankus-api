
let cart = []

class Product {
  constructor(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

function addToBag(id) {
  var name = document.getElementById("example-checkbox" + id).value
  var price = document.getElementById("productprice" + id).value
  var qty = document.getElementById("number" + id).value;
  if ( qty <= 0) alert("Value has to be greater than 1") 
  else{
    let newProduct = new Product(name,price,qty);
    cart.push(newProduct);
    console.log('cart',cart);
  }
  
}
//function to display cart
function displayCart() {
 
  let cartdata = '<table><tr><th>Product Name </th><th> Quantity</th> <th> Price</th><th> Total + Tax(13%) </th></tr>';
  let total = 0;

  cart.forEach(product =>{
    total += (product.price * product.quantity);
    cartdata += "<tr><td>" + product.name + "</td><td>" + product.quantity + "</td><td>" + product.price + "</td><td>" +
    product.price * product.quantity + "</td><td><button onclick ='delElement(" + cart.indexOf(product) + " )'>Delete</button></td><tr> "
  })

  cartdata += '<tr><td></td><td></td><td></td> <td>' + total + '</td></tr></table>'

  document.getElementById('Cart').innerHTML = cartdata
}
function delElement(a) {
  cart.splice(a,1);
  displayCart();
}
//Purchase Item
function purchaseItem(){ 
  var text;
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
} 

 //document.getElementById("inventory").innerHTML = inventory; } 
