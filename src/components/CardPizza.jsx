import React from "react";
import Card from "./Card";

const menu = [{
    name: "Napolitana",
    price: 8990,
    ingredients: ["mozzarela", "tomates", "jamon", "oregano"],
    img:"https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
},
{
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img:"https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
},
{
    name: "Pepperoni",
    price: 7590,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img:"https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
}]

const CardPizza = () => {
    return (
        <section className="bg-[#e0e0e0] grid grid-cols-3 justify-normal gap-20 p-24">
            {
                menu.map(pizza => <Card producto={pizza} />)
            }
        </section>
    )
}

export default CardPizza