// fungsi contohRestOperator memiliki parameter berbentuk rest operator (notasi tiga titik)
function contohRestOperator(a, b, c, ...argumenLain) {
  //   console.log(argumenLain);
  // output sisa dari argumen ["dibimbing", 30, 40]
}

contohRestOperator(1, 2, 90, "dibimbing", 30, 40);

const anggotaKeluarga = {
  ayah: "budi",
  ibu: "Lia",
  anak1: "Bima",
  anak2: "dodi",
  anak3: "valdi",
};

// pastikan peletakan dari variable destructuring sama dengan properti objeck yang ingin didestructure
const { ayah, ibu, ...anak } = anggotaKeluarga;
console.log(anak);
//  output
// {
//     anak1: "Bima",
//     anak2: "dodi",
//     anak3: "valdi",
// }

// pastikan peletakan dari index destructuring sama dengan index array yang ingin didestructure
const anggotaKeluargaArray = ["ayah", "Ibu", "Bima", "Dodi", "Valdi"];
const [bapak, mama, ...anakAngkat] = anggotaKeluargaArray;
console.log(anakAngkat);
// output ["Bima", "Dodi", "Valdi"]
