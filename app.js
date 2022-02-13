
function productNumber(product, isadd, price){
    const inputProductCount = document.getElementById(product + '-number');
    let productCount = inputProductCount.value;
    if (isadd == true) {
        productCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0) {
        productCount = parseInt(productCount) - 1;
    }
    inputProductCount.value = productCount;
    const productPrice = document.getElementById( product + '-price');
    const totalProductPrice = productCount * price;
    productPrice.innerText = totalProductPrice;
    calculateTotal()
};

// calculate total 
function getProductCount(product) {
    const productTotalCount = document.getElementById(product + '-number').value;
    const productTotal = parseInt(productTotalCount);
    return productTotal;
}
function calculateTotal() {
    const totalPhone =  getProductCount('phone') * 1219;
    const totalcase = getProductCount('case') * 59;
    const totalPrice = totalPhone + totalcase;
    const tax = totalPrice / 10;
    const total = totalPrice + tax;
    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

// phone count and price 
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    productNumber('phone', true, 1219);
});
document.getElementById('phone-minus-btn').addEventListener('click', function(){
    productNumber('phone', false, 1219);
});

// case count and price 
document.getElementById('case-plus-btn').addEventListener('click', function(){
    productNumber('case', true, 59);
});
document.getElementById('case-minus-btn').addEventListener('click', function(){
    productNumber('case', false, 59);
});
