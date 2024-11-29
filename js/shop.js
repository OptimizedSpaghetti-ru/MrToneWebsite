function filterProducts() {
    // Get all checkbox elements
    const acousticCheckbox = document.getElementById("acoustic").checked;
    const electricCheckbox = document.getElementById("electric").checked;
    const bassCheckbox = document.getElementById("bass").checked;
    const pedalCheckbox = document.getElementById("pedal").checked;
    const amplifierCheckbox = document.getElementById("amplifier").checked;
    const tunerCheckbox = document.getElementById("tuner").checked;

    // Get all product items
    const products = document.querySelectorAll(".products__item");

    // If no category is selected, show all products
    if (
        !acousticCheckbox &&
        !electricCheckbox &&
        !bassCheckbox &&
        !pedalCheckbox &&
        !amplifierCheckbox &&
        !tunerCheckbox
    ) {
        products.forEach((product) => {
            product.style.display = "block"; // Show all products
        });
        return;
    }

    // Hide all products by default, then display based on the selected checkboxes
    products.forEach((product) => {
        product.style.display = "none"; // Hide all products by default

        // Check category and display the relevant products
        if (
            (acousticCheckbox && product.classList.contains("acoustic")) ||
            (electricCheckbox && product.classList.contains("electric")) ||
            (bassCheckbox && product.classList.contains("bass")) ||
            (pedalCheckbox && product.classList.contains("pedal")) ||
            (amplifierCheckbox && product.classList.contains("amplifier")) ||
            (tunerCheckbox && product.classList.contains("tuner"))
        ) {
            product.style.display = "block"; // Display matching products
        }
    });
}

// JavaScript to handle the checkbox functionality
document.querySelectorAll('.categories input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        filterProducts(); // Call the filterProducts function on checkbox change
    });
});

// Initial call to display products based on default checkbox state
filterProducts();

function buyProduct(productName, productPrice, productImage) {
    // Store product details in local storage
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    localStorage.setItem("productImage", productImage);

    // Redirect to order page
    window.location.href = "summary.html";
}
