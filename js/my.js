// urun isimlerinin yanındaki adet sayıları dinamic olsun
// urun adetlerini azaltma arttırma olsun
// dropdown kaymasın
// urun eklenınce farklı bir toast mesaj çıksın 
//toast message güzelleştirilebilir

// menudeki urunler dinamıc olarak admin panelinden eklenebilsin
total = 0;
cardDom = document.getElementById("sepetcard");

// sepet iconuna tıklanıldıgında çalışacak ve ürünleri listeleyen bir dropdown açacak
function showsepet()
{
    cardDom.style.visibility == "hidden" ? cardDom.style.visibility = "visible" : cardDom.style.visibility = "hidden";
}


$(document).on("click","tr.rows td", function(e){
    fiyat = e.target.innerHTML;
    baslik = e.target.parentElement.firstElementChild.innerHTML;
    fiyat[0] == '$' ? sepeteGonder(baslik, fiyat) : console.log("baska birseye tılş") ;
});

function garsonailet(){
    let tost = new bootstrap.Toast(document.querySelector(".toast"))
    tost.show();
    showsepet();
}
function sepeteGonder(urunAdi, fiyati)
{
    fiyati = fiyati.slice(1)
    total += Number(fiyati);
    console.log(total);

    document.getElementById("message").innerHTML = "Confirm your order to forward it to the waiter.";
    trdom = document.createElement('tr'); // bu li yi table a eklenecek
    trdom.innerHTML = `
        <td class="tm-text-left">${urunAdi}</td>
        <td>x1</td> 
        <td>${fiyati}</td>`;

        if (document.getElementById("total"))
            document.getElementById("total").remove();
        document.getElementById("tableId").appendChild(trdom);
        totalprice();
    // sepet menusu açıldıgında gözükecek olan ürünleri bu fonksiyon ile ekliyoruz
    // bir uyarı çıkartarak sepete eklendiğini kullanıcıya bildiriyoruz
}
function totalprice()
{
    
    trdom = document.createElement('tr'); // bu li yi table a eklenecek
    trdom.id = "total";
    trdom.innerHTML = `
        <td class="tm-text-left">Total price</td>
        <td> </td> 
        <td>${total}</td>`;
    
        document.getElementById("tableId").appendChild(trdom);
}