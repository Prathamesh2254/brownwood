let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}
// Your phone number in international format
const phoneNumber = '+91-8796047981'; // Replace with your phone number

// Add event listener to all "Order Now" buttons
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the product name from the data attribute
        const productName = this.getAttribute('data-product');

        // Create the WhatsApp URL with the product name in the message
        const whatsappURL = `https://wa.me/${8796047981}?text=I%20would%20like%20to%20order%20${encodeURIComponent(productName)}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
    });
});
