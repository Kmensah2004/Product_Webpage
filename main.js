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
            return response.json();
        })
        .then(data => {
    
            displayProducts(data);
        }).catch(error => {
            // Task 4: Handle Errors 
            errorMessage.textContent = 'There was a problem loading the products at this time. Please try again in a few minutes.';
            console.error('Fetch error:', error);
        });
});
// Task 3: Display Product Details Dynamically
function displayProducts(products) {
    // Get the product container element
    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const productElement = document.createElement('div');

        // Add HTML content for the product
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h2>${product.fields.name}</h2>
            <p>Price: ${product.fields.price/100}</p>
            <p>Company: $${product.fields.company}</p>
        `;

        // Add the product element to the container
        productContainer.appendChild(productElement);
    });
}