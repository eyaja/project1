// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    // Select the cart items list and total element
    const cartItemsList = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".total");
  
    // Create an array to store cart items
    let cart = [];
    
    // Attach a click event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
    });
  
    // Function to handle adding an item to the cart
    function addToCart(event) {
      const product = event.target.parentNode;
      const productName = product.querySelector("h2").textContent;
      const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));
  
      // Create an object representing the cart item
      const cartItem = {
        name: productName,
        price: productPrice
      };
  
      // Add the cart item to the cart array
      cart.push(cartItem);
      // Update the cart display
      updateCart();
    }
  
    // Function to update the cart display
    function updateCart() {
      cartItemsList.innerHTML = ""; // Clear the existing cart items
  
      let total = 0; // Initialize the total cost
  
      // Loop through each cart item and update the display
      cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem); // Add item to the cart list
        total += item.price; // Update the total cost
      });
  
      // Update the total cost display
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
  });
  