function addToCart(productName) {
    const cartList = document.getElementById('cart');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${productName}</span>
        <button onclick="removeFromCart(this)">Hapus</button>
    `;
    cartList.appendChild(listItem);
}

function removeFromCart(button) {
    const listItem = button.parentNode;
    const cartList = document.getElementById('cart');
    cartList.removeChild(listItem);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulir terkirim dengan sukses!');
});
