import React, { useState } from "react";
import "./Shop.css";
import logo from "../assets/image.png";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Fancy items", price: "$40.00-$80.00", imageUrl: "https://img1.cgtrader.com/items/2520322/2360b1b63c/luxury-fancy-ring-3d-model-stl-3dm.jpg" },
    { id: 2, name: "Special items",  price: "$18.00", starurl:`${logo}`, imageUrl: "https://4.bp.blogspot.com/-6UkFz5_YvTU/VOQtzRVlHXI/AAAAAAAAATI/CspFS7WclL4/s1600/latest+handbags+designs+for+women-girls+2015.jpg", onSale: true, originalPrice: "$20.00" },
    { id: 3, name: "Sale item", price: "$25.00", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71h5FXDeETL._SL1500_.jpg", onSale: true, originalPrice: "$50.00" },
    { id: 4, name: "Popular item", price: "$40.00",starurl:`${logo}`, imageUrl: "https://i5.walmartimages.com/asr/2aa59abd-3809-4cf5-9ebf-66365c38cb2e.1b3c37d9a592da238fd30c2100356ad7.jpeg" },
    { id: 5, name: "Sale item", price: "$25.00", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61fPgryxsUL._SL1024_.jpg",onSale: true, originalPrice: "$50.00" },
    { id: 6, name: "Fancy Product", price: "$120.00-280.00", imageUrl: "https://images.jdmagicbox.com/quickquotes/images_main/semi-soft-silk-pattu-saree-pattu-border-saree-2-378530579-jvodt.jpg" },
    { id: 7, name: "Special item", price: "$18.00",starurl:`${logo}`, imageUrl: "https://www.vidiem.in/uploads/images/02_Satin_3B.jpg", onSale: true, originalPrice: "$20.00" },
    { id: 8, name: "Popular item", price: "$40.00", starurl:`${logo}`, imageUrl: "https://i5.walmartimages.com/asr/6196a622-c590-4f7d-8512-408215d321ff.7b8d0c3ba69304dcff3043c39fe3385b.jpeg" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button type="submit" id="cart" className="btn btn-outline-dark">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cart.length}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <section id="home">
        <h1>Shop with Style</h1>
        <h3>with this shop homepage template</h3>
      </section>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 p-2">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                {product.onSale && <h6><span className="badge bg-dark text-white">Sale</span></h6>}
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                
                <div className="card-body d-flex justify-content-center flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  {
                    product.starurl ?  <img src={product.starurl} className="star text-center" alt="" />:""
                  }
                 
                  {product.onSale ? (
                    <p className="card-text text-center">
                      <del>{product.originalPrice}</del> {product.price}
                    </p>
                  ) : (
                    <p className="card-text text-center">{product.price}</p>
                  )}
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container p-3"></div>
      <footer className="py-5 bg-dark">
        <p className="m-0 text-center text-white">Copyright &copy; yourwebsite2023</p>
      </footer>
    </div>
  );
};

export default Shop;
