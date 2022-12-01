const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Donat Pink Seres',
    price: 50000,
    description: '1 Dus isi 6 pcs , berbahan tepung terigu, kuning telur, ragi, gula pasir , susu bubuk margarin garam',
    type: 'donut',
    image: 'images/donut/donat-pink.png',
    isFeatured: true,
  },
  {
    id: 'p2',
    title: 'Donat Keju Lumer',
    price: 50000,
    description: '1 Dus isi 6 pcs , berbahan tepung terigu, kuning telur, ragi, gula pasir , susu bubuk margarin garam',
    type: 'donut',
    image: 'images/donut/donat-pink.png',
    isFeatured: true,
  },
  {
    id: 'p3',
    title: 'Donat Cokelat Seres',
    price: 50000,
    description: '1 Dus isi 6 pcs , berbahan tepung terigu, kuning telur, ragi, gula pasir , susu bubuk margarin garam',
    type: 'donut',
    image: 'images/donut/donat-cokelat-susu-seres.png',
    isFeatured: true,
  },
  {
    id: 'p4',
    title: 'Donat Campuran',
    price: 50000,
    description: '1 Dus isi 6 pcs, terdiri dari beberapa variant donat dan berbahan tepung terigu, kuning telur, ragi, gula pasir , susu bubuk margarin garam',
    type: 'donut',
    image: 'images/donut/donat-campuran.png',
    isFeatured: false,
  },
  {
    id: 'p5',
    title: 'Kue lumer',
    price: 45000,
    description: '1 Dus isi 8 pcs, berbahan santan, kentang, tepung terigu, telur dan cinta',
    type: 'tradisional',
    image: 'images/tradisional/kue-lumer.png',
    isFeatured: true,
  },
  {
    id: 'p6',
    title: 'Onde Onde',
    price: 35000,
    description: '1 Dus isi 8 pcs, berbahan tepung ketan, biji wijen, dan aneka rasa kacang hijau, cokelat, keju',
    type: 'tradisional',
    image: 'images/tradisional/kue-onde.png',
    isFeatured: true,
  },
  {
    id: 'p7',
    title: 'Kue Getuk',
    price: 45000,
    description: '1 Dus isi 8 pcs, berbahan singkong, gula merah, gula pasir, cinta dan kasih sayang',
    type: 'tradisional',
    image: 'images/tradisional/kue-getuk.png',
    isFeatured: true,
  },
  {
    id: 'p8',
    title: 'Kue Klepon',
    price: 30000,
    description: '1 Dus isi 12 pcs, tepung ketan, tepung beras cinta dan kasih sayang',
    type: 'tradisional',
    image: 'images/tradisional/kue-klepon.png',
    isFeatured: false,
  },
];

export function getFeaturedProducts() {
  return DUMMY_PRODUCTS.filter((event) => event.isFeatured);
}

export function getAllProducts() {
  return DUMMY_PRODUCTS;
}

export function getProductById(id) {
  return DUMMY_PRODUCTS.find((product) => product.id === id);
}
