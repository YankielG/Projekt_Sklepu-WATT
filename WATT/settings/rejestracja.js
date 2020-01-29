let boxCount = 0;
let shopping_price = 0.00;


window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Kupiłeś : '+boxCount+' artykuł(ów), za cenę : ' +shopping_price+'\nDziękuje za zakupy i zapraszam ponownie.')});

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', usun_all);

    const produkt = document.getElementsByClassName('shop-cart-button');
    for (let i = 0; i<produkt.length; i++) {
        produkt[i].addEventListener('click', dodaj);
    }
    function dodaj() {
        if (boxCount <= 7) {
            boxCount++;
            let cena = parseFloat(this.value);
            let name = this.id;
            let newID = Math.random();
            shopping_price = shopping_price + cena;
            document.getElementById('shopping_price').innerHTML = shopping_price.toFixed(2) +" ZŁ";


            let newEl = document.createElement('div');
            newEl.setAttribute('id', 'koszyk');
            newEl.classList.add('koszyk');
            document.getElementById('shopping-list').appendChild(newEl);

            let newNr = document.createElement('p');
            newNr.innerHTML = boxCount + ". " + name +  " - 1.szt. x " +cena + " ZŁ" + '<button class="usun" id="usun">x</button>';
            document.getElementById('koszyk').appendChild(newNr);

            let newCena = document.createElement('p');
            newCena.innerHTML = '------------------------';
            document.getElementById('koszyk').appendChild(newCena);


        } else {
            alert('Twój koszyk jest pełny');
        }

    }
    function usun_all() {
        let usun_all = document.getElementById('koszyk');
        let rodzic_all = document.getElementById('shopping-list');
        rodzic_all.removeChild(usun_all);
        boxCount = 0;
        shopping_price = 0.00;
    }
    function usun() {
        let usun = this.document.querySelector('div');
        let rodzic = document.getElementsByClassName('shopping-list');
        rodzic.removeChild(usun);
    }
};


