import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

function Home() {
  return (
    <main>
      <Header />
      <CardPizza pizzas = { pizzas }/>
    </main>
  )
}

export default Home