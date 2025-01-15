import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../mock/pizzas';

function Home() {
  const [menu, setMenu] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setMenu(data);
    } catch(e) {
      console.error(e);
    }
    }


  useEffect(() => {
    getData()
  }, [])

  console.log(menu)

  return (
    <main>
      <Header />
      <section className="bg-[#e0e0e0] grid grid-cols-3 justify-normal gap-20 p-24">
        {
          menu.map(pizza => {
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