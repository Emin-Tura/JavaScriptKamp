/*Istedigim kadar parametre gonderiyorum*/

console.log('/*--------- Asal Sayi Kontrolu---------*/');
function number(...numbers) {
  let asalmi = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1 || numbers[i] == 0) {
      asalmi = false;
    }
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        asalmi = false;
      }
    }
    if (asalmi) {
      console.log('Asal Sayı : ' + numbers[i]);
    } else {
      console.log('Asal Değil : ' + numbers[i]);
    }
    asalmi = true;
  }
}

number(0, 1, 5, 8, 4, 5, 20);

console.log('/*-----------Arkadas Sayilar---------*/');

let total1 = 0;
let total2 = 0;

function friendNbr(x, y) {
  // ilk sayi icin
  for (let i = 0; i < x; i++) {
    if (x % i == 0) {
      total1 += i;
      console.log(i);
    }
  }
  console.log('Birinci Sayinin Bolenleri Toplami :' + total1);

  //ikinci sayi icin
  for (let i = 0; i < y; i++) {
    if (y % i == 0) {
      total2 += i;
      console.log(i);
    }
  }
  console.log('Ikinci Sayinin Bolenleri Toplami :' + total2);

  if (total1 == y && total2 == x) {
    console.log('Sonuc : Arkadas Sayilar');
  } else {
    console.log('Sonuc : Arkadas Sayi Degiller');
  }
}

friendNbr(17296, 18416);

console.log('/*------------ 1000 e Kadar ki Mukemmel Sayilar---------*/');

function perfect() {
  for (let i = 1; i < 1000; i++) {
    //Her sayi icin pozitif tam bolenlerini
    //bularak toplamini hesapliyoruz
    let sum = 0;
    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    //Kendisi haric pozitif tam bolenlerinin
    //toplami kendisine esit mi diye kontrol ediyoruz
    if (sum == i) {
      console.log(i);
    }
  }
}
perfect();

console.log(
  '/*-----------------1000 E Kadar Asal Olan Sayilar ---------------*/'
);

function prime() {
  for (let i = 2; i < 1000; i++) {
    let asalmi = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        asalmi = false;
        break;
      }
    }
    if (asalmi) {
      console.log(i);
    }
  }
}
prime();
