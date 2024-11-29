function buyProduct(productName, productPrice, productImage) {
    // Store product details in local storage
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    localStorage.setItem("productImage", productImage);

    // Redirect to order page
    window.location.href = "summary.html";
}