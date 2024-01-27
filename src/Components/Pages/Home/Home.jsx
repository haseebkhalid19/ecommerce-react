import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { bannerHome, catImg1, catImg2, catImg3, catImg4 } from "../../../img";

const Home = () => {
  const [flashSale, setFlashSale] = useState([]);
  const [foryou, setForyou] = useState([]);
  const [products, setProducts] = useState([]);

  // Function to fetch products based on category
  const fetchProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  };

  const fetchApi = () => {
    fetch(`https://fakestoreapi.com/products?limit=6`)
      .then((res) => res.json())
      .then((json) => {
        setFlashSale(json);
      });
  };
  const sortApi = () => {
    fetch(`https://fakestoreapi.com/products?sort=desc`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setForyou(json);
      });
  };

  useEffect(() => {
    fetchProductsByCategory("electronics");
    fetchApi();
    sortApi();
  }, []);

  return (
    <>
      <section id="products">
        <div className="banner container text-center">
          <a href="#">
            <img src={bannerHome} alt="Banner Daraz" width="100%" />
          </a>
          <div>
            <div className="d-flex align-items-center px-5">
              <a href="#">
                <div className="d-flex align-items-center justify-content-between mart">
                  <div className="img-container">
                    <img src={catImg1} alt="catImg1" />
                    <span>Electronics</span>
                  </div>
                  <div>
                    <i className="fas fa-arrow-right d-none"></i>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="d-flex align-items-center justify-content-between mens">
                  <div className="img-container">
                    <img src={catImg2} alt="catImg2" />
                    <span>Men's Fashion</span>
                  </div>
                  <div>
                    <i className="fas fa-arrow-right d-none"></i>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="d-flex align-items-center justify-content-between women">
                  <div className="img-container">
                    <img src={catImg3} alt="catImg3" />
                    <span>Women's Fashion</span>
                  </div>
                  <div>
                    <i className="fas fa-arrow-right d-none"></i>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="d-flex align-items-center justify-content-between home">
                  <div className="img-container">
                    <img src={catImg4} alt="catImg4" />
                    <span>Jewelery</span>
                  </div>
                  <div>
                    <i className="fas fa-arrow-right d-none"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Flash Sale Section */}
        <div className="sale container pb-5">
          <h4>Flash Sale</h4>
          <div className="row py-3">
            {flashSale.map((product) => (
              <div className="col-6 col-md-2" key={product.id}>
                <NavLink to={`/product-detail/${product.id}`}>
                  <img
                    className="img"
                    src={product.image}
                    alt={product.title}
                    width="100%"
                  />
                  <p>{product.title}</p>
                  <h6>Rs. {product.price}</h6>
                  <span>{product.rating.rate}</span>
                  <span className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Just For You Section */}
        <section className="for-you">
          <div className="container py-5">
            <h4>Just For You</h4>
            <div className="row">
              {foryou.map((product) => (
                <div className="col-6 col-md-2" key={product.id}>
                  <NavLink to={`/product-detail/${product.id}`}>
                    <img
                      className="img"
                      src={product.image}
                      alt={product.title}
                      width="100%"
                    />
                    <p>{product.title}</p>
                    <h6>Rs. {product.price}</h6>
                    <span>{product.rating.rate}</span>
                    <span className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </NavLink>
                </div>
              ))}
              {/* <button className="btn btn-outline-orange mt-5">Load More</button> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
