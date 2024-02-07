import { useState, useEffect } from "react";

import { Card } from "../Components/Card"

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect ( () => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=24')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);

  return (
    <>
      <div className="">
        <h1>Home</h1>
        <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
          {
            items?.map( (item) => ( <Card  info={item} key={item.id} /> ) )
          }
        </section>
      </div>
    </>
  )
}

export { Home }
