
 const productName = localStorage.getItem("productName");
 const productPrice = localStorage.getItem("productPrice");
 const productImage = localStorage.getItem("productImage");


 document.getElementById("product-image").src = productImage;
 document.getElementById("product-name").textContent = productName;
 document.getElementById("product-price").textContent = productPrice;


 const quantityInput = document.getElementById("quantity");


 function calculateTotalPrice() {
const quantity = quantityInput.value;
const pricePerUnit = parseFloat(productPrice.replace("₱ ", "").replace(",", "")); // Remove comma from product price
const subtotal = quantity * pricePerUnit;
const tax = subtotal * 0.05; 
const total = subtotal + tax;

document.getElementById("subtotal").textContent = `Subtotal: ₱ ${subtotal.toFixed(2)}`;
document.getElementById("tax").textContent = `TAX: ₱ ${tax.toFixed(2)}`;
document.getElementById("total").textContent = `TOTAL: ₱ ${total.toFixed(2)}`;
document.getElementById("total-price").textContent = `₱ ${total.toFixed(2)}`;
}


 quantityInput.addEventListener("input", calculateTotalPrice);

 
 calculateTotalPrice();


 function removeProduct() {
     localStorage.removeItem("productName");
     localStorage.removeItem("productPrice");
     localStorage.removeItem("productImage");
     window.location.href = "shop.html";
    
 }