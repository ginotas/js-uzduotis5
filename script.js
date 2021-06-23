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
Papildomai:
Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.
*/

document.getElementById("generavimas").addEventListener("click", function() {

    let masyvas = [];

    for (let i=0; i<100; i++) {
        let objektas = {
            id: i+1,
            vardas: "vardas"+(i+1)
        };
        masyvas[i] = objektas;  
    

    let divElementas = document.createElement("div"); 
    divElementas.classList.add("div-dydis");
    divElementas.innerHTML = objektas.id + " " + objektas.vardas;
    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("spalva");
    }
    document.querySelector(".divas").append(divElementas);
    }
});


/*
3. Susikurti objektą "Kvadratas".
Objektas turi priimti du kintamuosius: a ir b kraštines.
Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
Informaciją išvesti į <p> žymę.


Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. 
Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas.  
*/

document.getElementById("nubrezk").addEventListener("click", function() {
    let a, b;
    a = parseFloat(document.getElementById("a-krastine").value);
    a = parseFloat(document.getElementById("b-krastine").value);

    let kvadratas = {
        a: 300,
        b: 400,
    
        paleidimas: function () {
            a = a;
            b = b;
        },
    
        plotasPerimetras: function() {
    
            let plotas;
            let perimetras;
    
            plotas = this.a * this.b;
            perimetras = 2 * this.a + 2 * this.b;
            return [plotas, perimetras]
        },
        istrizaine: function() {
            let ilgis;
            ilgis = Math.sqrt(this.a * this.a + this.b * this.b);
            return ilgis;
        },
        nubrezk: function() {
            document.querySelector(".keturkampis").style.width = this.a + "px";
            document.querySelector(".keturkampis").style.height = this.b + "px";
        },
        isvesk: function() {
            document.getElementById("perimetras").innerText = "kvadrato perimetras " + kvadratas.plotasPerimetras()[1];
            document.getElementById("plotas").innerText = "kvadrato plotas " + kvadratas.plotasPerimetras()[0];
            document.getElementById("istrizaine").innerText = "kvadrato istrizaine " + kvadratas.istrizaine();
        },
    };
    
    
    
    
    kvadratas.paleidimas();
    kvadratas.isvesk();
    kvadratas.nubrezk();
});