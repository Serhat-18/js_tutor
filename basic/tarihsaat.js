var suAn = new Date();
var yil = suAn.getFullYear();
var ay = suAn.getMonth() + 1;
var gun = suAn.getDate();
var saat = suAn.getHours();
var dakika = suAn.getMinutes();
var saniye = suAn.getSeconds();

console.log("Şu anki tarih ve saat: " + gun + "/" + ay + "/" + yil + " " + saat + ":" + dakika + ":" + saniye);
