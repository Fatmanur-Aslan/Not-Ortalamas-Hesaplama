function Hesapla(){
    birinciSınavNotu=document.getElementById("birinciSınavİnput").value;
    ikinciSınavNotu=document.getElementById("ikinciSınavİnput").value;
    ortalama=(birinciSınavNotu/2) + (ikinciSınavNotu/2) ;
    document.getElementById("sonucSpan").innerHTML=ortalama;

if (ortalama>=50 && ortalama<=70){
    document.getElementById("h2").innerHTML="Geçtiniz.";
}

else if(ortalama<50){
    document.getElementById("h2").innerHTML="Üzgünüm... Kaldınız.";
}


else if(ortalama>70){
    document.getElementById("h2").innerHTML="Tebrikler ! Geçtiniz.";
}


if(ortalama===100){
    document.getElementById("h2").innerHTML="Kusursuz ! Geçtiniz.";

}

}

