let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : '+boxCount+' przedmiotów,\n za łączną kwotę : ' +sumCount)});

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', usun_all);

    //let btn2 = document.getElementById('usun');
    btn2.addEventListener('click',usun);

const produkt = document.getElementsByClassName('cart-button');
 for (let i = 0; i<produkt.length; i++) {
     produkt[i].addEventListener('click', dodaj);
 }
function dodaj() {
     if (boxCount <= 7) {
         boxCount++;
         let cena = parseFloat(this.value);
         let name = this.title;
         let newID = Math.random();
         console.log(cena);
         console.log(name);
         console.log(newID);
         sumCount = sumCount + cena;
         console.log(sumCount);
         document.getElementById('sumCount').innerHTML = sumCount.toFixed(2) +" PLN";
        let newEl = document.createElement('div');
        newEl.setAttribute('id', 'koszyk');
        newEl.classList.add('koszyk');
        document.getElementById('basket').appendChild(newEl);
        let newNr = document.createElement('p');
        newNr.innerHTML = name + '<button class="usun" id="usun">USUN</button>';
        document.getElementById('koszyk').appendChild(newNr);
        let newCena = document.createElement('p');
        newCena.innerHTML = cena + ' PLN';
        document.getElementById('koszyk').appendChild(newCena);
        //console.log(newEl);
        //console.log(newNr);
        //console.log(newNr);
        //console.log(newUsun);
        //console.log(newCena);
        //console.log('TADAM');
         //console.log(boxCount);

     } else {
         alert('Możesz kupić tylko 8');
     }

}
 function usun_all() {
     let usun_all = document.getElementById('koszyk');
     let rodzic_all = document.getElementById('basket');
     rodzic_all.removeChild(usun_all);
     boxCount = 0;
     sumCount = 0.00;
      }
 function usun() {
   // let usun = this.document.querySelector('div');
    //let rodzic = document.getElementsByClassName('basket');
   // rodzic.removeChild(usun);
 }
}


