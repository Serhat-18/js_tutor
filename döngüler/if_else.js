// Kullanıcıdan bir sayı girişi alalım
var sayi = prompt("Bir sayı girin:");

// Girilen sayıyı tam sayıya dönüştürelim
sayi = parseInt(sayi);

// if-else döngüsü ile girilen sayının pozitif, negatif veya sıfır olduğunu kontrol edelim
if (sayi > 0) {
    console.log("Girilen sayı pozitif.");
} else if (sayi < 0) {
    console.log("Girilen sayı negatif.");
} else {
    console.log("Girilen sayı sıfır.");
}
