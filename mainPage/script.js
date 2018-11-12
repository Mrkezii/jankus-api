let cart = [];


function getProd() {
 // let newProduct = new Product(Item, price, Quantity);
  
  console.log("cart", cart);
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
        const titleInputName = document.createTextNode("Item")
        const priceInput = document.createElement("input");
        const quantityInput = document.createElement("input");

        titleInput.type = "text";
        titleInput.value = product.Item;
        //cart.push(product.Item,product.price,product.Quantity)
        titleInput.appendChild(titleInputName) ;
        priceInput.type = "number";
        priceInput.labels = "Price";
        priceInput.value = product.price;
       // cart.push(product.price);
        quantityInput.type = "number";
        quantityInput.value = product.Quantity;
     
       // cart.push(product.Quantity);
        
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
function  myTable(){
  cartdata = '<table><tr><th>Item /th><th>   Quantity      </th> <th>    Price    </th><th> Tax(13%) </th></tr>';
  total = 0;
  for (i = 0; i < cart.length; i++) {
    cartdata += "<tr><td>" + cart.values[i] + "</td><td>" + price.value[i] + "</td><td>" +  quantityInput1[i] + "</td><td>" +
       "</td><td><button onclick ='delElement(" + i + " )'>Delete</button></td><tr> "
  }
  cartdata += '<tr><td></td><td></td><td></td> <td>' + total + '</td></tr></table>'
  document.getElementById('Cart').innerHTML = cartdata
}
//window.onload = myTable