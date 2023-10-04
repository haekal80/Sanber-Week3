const prompt = require('prompt-sync')({sigint: true})

const input = prompt('Masukkan angka: ')
const angka = parseInt(input)

const result = (angka) => {
    if (angka < 0) {
        console.log('Tidak bisa input bilangan negatif');
    } else if (angka % 2 !== 0) { // Jika input angka ganjil
        console.log('Tidak bisa input bilangan ganjil');
    } else { // Jika input angka valid, hitung akar pangkat 2
        let akarPangkat2 = Math.sqrt(angka);
        console.log(`Akar pangkat 2 dari ${angka} adalah ${akarPangkat2}`);
    }
}

result(angka);