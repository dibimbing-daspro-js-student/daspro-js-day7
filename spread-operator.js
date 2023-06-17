const favorites = ["Salad", "Soup", "Nasi goreng", "Bakso"];
const favoritesDrink = ["Es buah", "Pop ice", "Mixue", "Starbucks"];
// console.log(...favorites);
const favoritesGabungan = [...favorites, "Indomie", ...favoritesDrink];
// const favoritesGabungan = favorites.concat(favoritesDrink);
// console.log(favoritesGabungan);
const copyFavorites = [...favorites];
copyFavorites[0] = "Ayam goreng";
// console.log(favorites);
// console.log(copyFavorites);

// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
const data1 = {
  nama: "Budi",
  tempatLahir: "Bandung",
  tanggalLahir: "24 April 98",
};

const data2 = {
  namaAyah: "Agus",
  namaIbu: "Yve",
  namaKakak: "Irfan",
};

const dataGabungan = { ...data1, umur: 26, ...data2 };
console.log(dataGabungan)

// Kapan kita menggunakan spread operator?
// ketika kita ingin mengcopy array/object
// ketika kita ingin menggabungkan 2 atau lebih array/object
