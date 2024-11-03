// Task 2: Fetch Products from the API Using Fetch and Promises
document.addEventListener('DOMContentLoaded', () => {
    // Get HTML elements
    const productContainer = document.getElementById('productContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Fetch data from the JavaScript Store Products API
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not up to par');
            }
            // Convert response to JSON
            return response.json();
        })
        .then(data => {
            // Call function to display products if fetch is successful
            displayProducts(data);
        })