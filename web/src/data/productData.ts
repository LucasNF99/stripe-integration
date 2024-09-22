import product1 from '../assets/product-1.webp';
import product2 from '../assets/product-2.webp';
import product3 from '../assets/product-3.webp';

export const mockProducts = [
  {
    name: 'Nike Air Max 1',
    price: 520,
    fullPrice: 540,
    divide: 4,
    image: product1,
    showCaseImages: [product1, product1],
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia ultrices consequat scelerisque sociosqu felis cras.',
    id: 'price_1Q1cvuIKtjDgHaXfdyBwhVH3',
    rating: 3.1
  },
  {
    name: 'Nike Air Max 270',
    price: 838,
    fullPrice: 900,
    divide: 6,
    image: product2,
    showCaseImages: [product2, product2],
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia ultrices consequat scelerisque sociosqu felis cras.',
    id: 'price_1Q1cx8IKtjDgHaXfHMstqof2',
    soldOut: false,
    rating: 4.1
  },
  {
    name: 'Nike Air Max Excee',
    price: 325,
    fullPrice: 390,
    divide: 3,
    image: product3,
    showCaseImages: [product3, product3],
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia ultrices consequat scelerisque sociosqu felis cras.',
    id: 'price_1Q1cxbIKtjDgHaXfsRKN6An9',
    soldOut: false,
    rating: 5
  },
  {
    name: 'Tênis Air Max',
    price: 325,
    fullPrice: 390,
    divide: 5,
    image: product1,
    id: 'price_2',
    soldOut: true,
    rating: 2
  },
  {
    name: 'Tênis Air Max',
    price: 325,
    fullPrice: 390,
    divide: 5,
    image: product2,
    id: 'price_2',
    soldOut: true,
    rating: 3
  },

]