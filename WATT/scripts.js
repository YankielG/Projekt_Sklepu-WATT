let countBay = 0;
let shopping_price = 0.00;

window.onload = function () {

    let buttonBay = document.getElementById('add');
    buttonBay.addEventListener('click', function () {
        alert('Kupiłeś : '+countBay+' artykuł(ów), za cenę : ' +shopping_price+' ZŁ'+'\nDziękuje za zakupy i zapraszam ponownie.')});
    let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', clearShopingCart);

    document.getElementById('shopping-list').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-product-list')) {
            removeElement(e.target);
        }
    });
    const productList = document.getElementsByClassName('shop-cart-button');
    for (let a = 0; a < productList.length; a++) {
        productList[a].addEventListener('click', addProduct);
    }
    function addProduct() {
        if (countBay <= 7) {
            countBay++;
            let price = parseFloat(this.value);
            let name = this.id;
            shopping_price = shopping_price + price;
            document.getElementById('shopping_price').innerHTML = shopping_price.toFixed(2) +" ZŁ";
            let newList = document.createElement('div');
            newList.classList.add('cart-produkt');
            newList.setAttribute('id', 'card-product');
            let newName = document.createElement('a');
            newName.innerHTML = name +  " - 1.szt. x " + price + " ZŁ";
            let newClear = document.createElement('button');
            newClear.classList.add('remove-product-list');
            newClear.setAttribute('value', price);
            newClear.textContent = "x";
            let newPrice = document.createElement('a');
            newPrice.setAttribute('id', 'price');
            // newPrice.innerHTML = price+" ZŁ";
            newList.appendChild(newClear);
            newList.appendChild(newName);
            newList.appendChild(newPrice);
            document.getElementById('shopping-list').appendChild(newList);
        } else {
            alert('Twój koszyk jest pełny');
        }

    }
    function clearShopingCart() {

        for(let i = 0; i<countBay;i++) {
            let procuctAll = document.getElementById('card-product');
            let elementtAll = document.getElementById('shopping-list');
            elementtAll.removeChild(procuctAll);
        }
        countBay = 0;
        shopping_price = 0.00;
        updateSum(shopping_price);
    }
    function updateSum(value) {
        document.getElementById('shopping_price').innerHTML = shopping_price.toFixed(2) +" ZŁ";
    }
    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('shopping-list').removeChild(elementToRemove);
        shopping_price -= parseFloat(clickedElement.value);
        updateSum(shopping_price);
        countBay --;
    }
};
