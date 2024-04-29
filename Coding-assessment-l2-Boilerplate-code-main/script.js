document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showProducts(tab.innerText.trim()); // Use trimmed text to handle potential white spaces
        });
    });

    showProducts('Men'); // Display Men products by default
});

async function showProducts(category) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear previous content

    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();

        console.log('API Response:', data);

        if (!data || !data.categories || !Array.isArray(data.categories)) {
            console.error('Invalid data format or "categories" not found');
            return;
        }

        const categoryData = data.categories.find(cat => cat.category_name === category);

        if (!categoryData || !categoryData.category_products || !Array.isArray(categoryData.category_products)) {
            console.error('Invalid data format or products not found for the selected category');
            return;
        }

        const categoryProducts = categoryData.category_products;

        categoryProducts.forEach(product => {
            const discountPercentage = calculateDiscountPercentage(product.price, product.compare_at_price);

            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.classList.add('product-image');

            const productDetails = document.createElement('div');
            productDetails.classList.add('product-details');

            const badge = document.createElement('div');
            badge.classList.add('badge_text');

            const productTitle = document.createElement('div');
            productTitle.innerText = product.title;
            productTitle.classList.add('product_title');

            const vendor = document.createElement('div');
            vendor.innerText = `. : ${product.vendor}`;
            vendor.classList.add('vender');

            const productPricing = document.createElement('div');
            productPricing.classList.add('product-pricing');

            const price = document.createElement('div');
            price.innerText = `Rs ${product.price}`;
            price.classList.add('product_price');

            const compareAtPrice = document.createElement('div');
            compareAtPrice.innerText = `Rs ${product.compare_at_price}`;
            compareAtPrice.classList.add('product_price_strike');

            const discountElement = document.createElement('div');
            discountElement.innerText = `${discountPercentage}% off`;
            discountElement.classList.add('discount_percentage');

            const addToCartButton = document.createElement('button');
            addToCartButton.innerText = 'Add to Cart';
            addToCartButton.classList.add('button');

            productPricing.appendChild(price);
            productPricing.appendChild(compareAtPrice);
            productPricing.appendChild(discountElement);

            productDetails.appendChild(badge);
            productDetails.appendChild(productTitle);
            productDetails.appendChild(vendor);
            productDetails.appendChild(productPricing);
            productDetails.appendChild(addToCartButton);

            productCard.appendChild(productImage);
            productCard.appendChild(productDetails);

            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function calculateDiscountPercentage(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return discount.toFixed(2);
}

