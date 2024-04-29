## WebLink:


# Product Display Web Application

This project is a simple web application designed to display products categorized into Men, Women, and Kids sections. Users can switch between these categories using tabs and view corresponding products. The application fetches product data from a provided JSON API endpoint and dynamically generates product cards with details like image, title, vendor, pricing, and discount information.

## Table of Contents

1. [Features](#features)
2. [Setup](#setup)
3. [File Structure](#file-structure)
4. [Usage](#usage)
5. [Technical Details](#technical-details)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Dynamic Category Tabs**: Users can switch between Men, Women, and Kids categories using interactive tabs.
- **Product Display**: Products corresponding to the selected category are dynamically fetched and displayed.
- **Responsive Design**: The application is responsive and adapts to different screen sizes for a better user experience.
- **Product Details**: Each product card displays details such as image, title, vendor, pricing, and discount percentage.
- **Add to Cart**: Option to add products to the cart for further processing (Note: This functionality is not implemented in the current version).

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
   
   ```bash
   cd product-display-app
   
3.Open index.html in your web browser.

## File Structure:
project-root/
        |-- index.html
        |-- style.css
        |-- script.js
        |-- README.md
- index.html: Main HTML file containing the structure of the web page.
- style.css: Cascading Style Sheets (CSS) file defining the visual appearance of the web page.
- script.js: JavaScript file containing the logic to fetch and display product data, handle tab interactions, and calculate discount percentages.
- multiProduct.json: JSON file containing sample product data (Note: This file is used for demonstration purposes).

## Usage
- Open index.html in your web browser.
- Click on the category tabs (Men, Women, or Kids) to view corresponding products.
- Scroll through the product cards to explore different products within the selected category.
- Optionally, add products to the cart (Note: This functionality is not implemented in the current version).

## Technical Details
- HTML: Defines the structure of the web page, including headings, buttons for category tabs, and a container for product display.
- CSS: Styles the HTML elements to achieve a visually appealing layout, including tab styling, product card layout, and responsive design for different screen sizes.
- JavaScript: Implements the logic for fetching product data from the API, dynamically generating product cards, handling tab interactions, and calculating discount percentages.
- API Integration: Utilizes the fetch API to asynchronously retrieve product data from the provided JSON endpoint.
- Responsive Design: Uses CSS media queries to adjust the layout and styling based on the screen size, ensuring optimal viewing experience across devices.

## Contributing
- Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to improve this project.

## License
- This project is licensed under the MIT License.

