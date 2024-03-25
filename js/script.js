// Dynamically add student information
document.getElementById('studentInfo').innerText = "Student ID: 200555657, Name: Mehakjot Singh Dhaliwal";

// Pizza class
class Pizza {
    constructor(size, toppings, quantity) {
        this.size = size;
        this.toppings = toppings;
        this.quantity = quantity;
    }

    getDescription() {
        return `Size: ${this.size}, Toppings: ${this.toppings.join(', ')}, Quantity: ${this.quantity}`;
    }
}

// Form submission handler
document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const size = document.getElementById('size').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(checkbox => checkbox.value);
    const quantity = parseInt(document.getElementById('quantity').value);

    const pizza = new Pizza(size, toppings, quantity);
    displayPizzaDescription(pizza);
});

// Function to display pizza description
function displayPizzaDescription(pizza) {
    const description = pizza.getDescription();
    document.getElementById('studentInfo').insertAdjacentHTML('beforebegin', `<p>${description}</p>`);
}
