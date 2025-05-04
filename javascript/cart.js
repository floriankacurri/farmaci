let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-container");
const totalContainer = document.getElementById("total-container");

function renderCart() {
  cartContainer.innerHTML = "";
  totalContainer.textContent = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p class='empty'>Karroca jote eshte bosh.</p>";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
            <img src="${item.image.startsWith('http') ? item.image : './images/' + item.image}" alt="${item.name}">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p class="price">ALL${item.price.toFixed(2)} x ${item.quantity} = ALL${subtotal.toFixed(2)}</p>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">Hiq nga karroca</button>
    `;
    cartContainer.appendChild(div);
  });

  totalContainer.textContent = `Total: ALL${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();