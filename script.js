"use strict";

/*
1. Papildyti paskaitoje aptartą skaičiuotuvo objektą:
* Pridėti šaknies bei liekanos skaičiavimo metodus.
* Metodas "rezultatas" išvedą rezultatų masyvą.
* Papildyti objektą metodu, kuris išvedą visų metodo "rezultatas" masyvo elementų vidurkį.
*/


document.getElementById("skaiciuoti").addEventListener("click", function() {
    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

    const skaiciuotuvas = {
        sk1: 5,
        sk2: 9,
    
        paleidimas: function(a,b) {
            this.sk1 = a;
            this.sk2 = b;
        },
    
        sudetis: function() {
            let suma;
            suma = this.sk1 + this.sk2;
            return suma;
        },
        atimtis: function() {
            let atimtis;
            atimtis = this.sk1 - this.sk2;
            return atimtis;
        },
        daugyba: function() {
            let daugyba;
            daugyba = this.sk1 * this.sk2;
            return daugyba;
        },
        dalyba: function() {
            let dalyba;
            dalyba = this.sk1 / this.sk2;
            return dalyba;
        },
        liekana: function() {
            let liekana;
            liekana = this.sk1 % this.sk2;
            return liekana;
        },
        saknis1: function() {
            let saknis1;
            saknis1 = Math.sqrt(sk1);
            return saknis1;
        },
        saknis2: function() {
            let saknis2;
            saknis2 = Math.sqrt(sk2);
            return saknis2;
        },
        masyvas: function() {
            let masyvas;
            masyvas = [
            this.sudetis(),
            this.atimtis(),
            this.daugyba(),
            this.dalyba(),
            this.liekana(),
            this.saknis1(),
            this.saknis2(),
            ];
            return masyvas;
        },
        vidurkis: function() { 
            let ilgis = this.masyvas().length;
            let bendraSuma = 0;
            for (let i=0; i < ilgis; i++) { 
                bendraSuma = bendraSuma + this.masyvas()[i];
             }
            let vid = (bendraSuma / ilgis );
            return vid;
        },
        rezultatas: function () {
            console.log(this.sudetis());
            console.log(this.atimtis());
            console.log(this.daugyba());
            console.log(this.dalyba());
            console.log(this.liekana());
            console.log(this.saknis1() + " ir " + this.saknis2());
            console.log(this.masyvas());
            console.log(this.vidurkis());
        }

    };
    
    skaiciuotuvas.paleidimas(sk1, sk2);
    skaiciuotuvas.rezultatas();
    
   

});

/*
2. Susikurti objektų masyvą:
* Masyve 100 objekto elementų.
* Objekto vidiniai kintamieji: id, vardas.
* Vardas reikšmė = vardas1,vardas2 ir t.t.  
* Id reikšmė = 1, 2 ir t.t.
*/

document.getElementById("generavimas").addEventListener("click", function() {

    
});