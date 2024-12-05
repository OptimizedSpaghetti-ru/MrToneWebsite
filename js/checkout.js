document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.getElementById("checkoutButton");
  const shippingModal = document.getElementById("shippingModal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const shippingForm = document.getElementById("shippingForm");
  const placeOrderButton = document.getElementById("placeOrderButton");

  // Show the modal when checkout button is clicked
  checkoutButton.addEventListener("click", () => {
    shippingModal.style.display = "flex";
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    shippingModal.style.display = "none";
  });

  // Close the modal if user clicks outside the modal
  window.addEventListener("click", (event) => {
    if (event.target === shippingModal) {
      shippingModal.style.display = "none";
    }
  });

  // Handle form submission
  shippingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Add the order success animation (simple alert for demonstration)
    alert("Order Success!");

    // Redirect to another page after the order is placed
    const shippingDetails = {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      zip: document.getElementById("zip").value,
    };

    // Store the shipping details in localStorage
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));

    // Store the product details in localStorage
    const productDetails = {
      productName: localStorage.getItem("product-name"),
      productPrice: localStorage.getItem("total"),
      productImage: localStorage.getItem("product-image"),
    };
    localStorage.setItem("productDetails", JSON.stringify(productDetails));

    // Redirect to order.html page
    window.location.href = "order.html";
  });
});
