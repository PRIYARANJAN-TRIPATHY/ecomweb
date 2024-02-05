function addToCart(productName, productPrice) {
    alert(productName + " added to cart! Price: $" + productPrice.toFixed(2));
}

function toggleTerms() {
    var termsContent = document.getElementById("termsContent");
    if (termsContent.style.display === "none") {
        termsContent.style.display = "block";
    } else {
        termsContent.style.display = "none";
    }
}
