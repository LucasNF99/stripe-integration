
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { mockProducts } from './data/productData';

export function App() {

  return (
    <main className='container mx-auto px-2 mb-10'>
      <Header
        title='Conheça nossos produtos'
        subTitle='Temos o menor preço do mercado e a maior qualidade!'
      />
      <div className='grid  grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 justify-stretch items-stretch mx-auto max-w-screen-lg'>
        {mockProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            divide={item.divide}
            fullPrice={item.fullPrice}
            soldOut={item.soldOut}
            rating={item.rating}
          />
        ))}
      </div>

    </main>
  )
}
