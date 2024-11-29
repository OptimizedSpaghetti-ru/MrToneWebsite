// Retrieve order from local storage
const order = JSON.parse(localStorage.getItem('order'));
    
if (order) {
  // Display order details
  const orderDetailsDiv = document.getElementById('orderDetails');
  orderDetailsDiv.innerHTML = `
    <h2>Product Details</h2>
    <img src="${order.productImage}" alt="Product Image" style="max-width: 100px;">
    <p><strong>Name:</strong> ${order.productName}</p>
    <p><strong>Price:</strong> ${order.productPrice}</p>
    <p><strong>Quantity:</strong> ${order.quantity}</p>
    
    <h2>Shipping Details</h2>
    <p><strong>Name:</strong> ${order.shippingDetails.name}</p>
    <p><strong>Address:</strong> ${order.shippingDetails.address}</p>
    <p><strong>City:</strong> ${order.shippingDetails.city}</p>
    <p><strong>ZIP Code:</strong> ${order.shippingDetails.zip}</p>
  `;
} else {
  document.getElementById('orderDetails').innerHTML = '<p>No order found.</p>';
}