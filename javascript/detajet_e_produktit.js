function addToCart() {
  const amount = parseInt(document.getElementById("amount").value);
  const image = document.querySelector(".product-image img").src;
  const name = document.querySelector(".product-details h2").innerText;
  const priceText = document.querySelector(".price").innerText;
  const price = parseInt(priceText.replace(/\D/g, "")); // Heq ALL dhe merr vetëm numrin

  const product = {
    id: 1,
    name: name,
    price: price,
    image: image,
    quantity: amount
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity += amount;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${amount} produkt/e ${product.name} u shtuan në karrocë.`);
}