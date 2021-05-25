import React from "react";
import "./home.css";
import Product from "../product/Product";
import { getData } from "../product/helper";

Home.propTypes = {};

function Home() {
  const data = getData();

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt="main"
        />

        <div className="home__row">
          <Product
            image={data[0].image}
            title={data[0].title}
            price={data[0].price}
            rating={data[0].rating}
          />
          <Product
            image={data[1].image}
            title={data[1].title}
            price={data[1].price}
            rating={data[1].rating}
          />
        </div>
        <div className="home__row">
          <Product
            image={data[2].image}
            title={data[2].title}
            price={data[2].price}
            rating={data[2].rating}
          />
          <Product
            image={data[3].image}
            title={data[3].title}
            price={data[3].price}
            rating={data[3].rating}
          />
          <Product
            image={data[4].image}
            title={data[4].title}
            price={data[4].price}
            rating={data[4].rating}
          />
        </div>
        <div className="home__row">
          <Product
            image={data[5].image}
            title={data[5].title}
            price={data[5].price}
            rating={data[5].rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
