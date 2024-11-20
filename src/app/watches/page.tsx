import Image from "next/image";
import React from "react";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Rolex",
      price: 12000,
      description: "Luxury watch",
      image: "/rolex.png",
    },
    {
      id: 2,
      name: "Omega",
      price: 8000,
      description: "Sporty design",
      image: "/omega.png",
    },
    {
      id: 3,
      name: "Patek Philippe",
      price: 25000,
      description: "Elegant timepiece",
      image: "/patek.jpg",
    },
    {
      id: 4,
      name: "TAG Heuer",
      price: 5000,
      description: "Sporty and stylish",
      image: "/tag heuer.png",
    },
    {
      id: 5,
      name: "Breitling",
      price: 7000,
      description: "Bold and rugged",
      image: "/Breitling.png",
    },
    {
      id: 6,
      name: "Seiko",
      price: 1000,
      description: "Affordable and reliable",
      image: "/seiko.jpeg",
    },
  ];
  return (
    <div>
      <div className="watches">

      {watchData.map((watch) => {
        return <div key={watch.id} className="watch-card">
          <Image src={watch.image} alt={watch.name} width={250} height={200}/>
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="price">${watch.price}</div>
          <button>Add To Cart</button>
        </div>;
      })}
      </div>
    </div>
  );
};

export default Watches;
