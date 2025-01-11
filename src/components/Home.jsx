import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../mock/pizzas';

function Home() {
  return (
    <main>
      <Header />
      <section className="bg-[#e0e0e0] grid grid-cols-3 justify-normal gap-20 p-24">
        {
          pizzas.map(pizza => {
            return(
              <CardPizza 
                key={pizza.id}
                img={pizza.img}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            )
          })
        }
      </section>
    </main>
  )
}

export default Home