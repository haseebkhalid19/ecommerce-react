import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similar, setSimilar] = useState([]);

  const fetchApi = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  };

  const fetchSimilarProducts = () => {
    fetch(`https://fakestoreapi.com/products?limit=4`)
      .then((res) => res.json())
      .then((json) => {
        setSimilar(json);
      })
      .catch((error) => {
        console.error("Error fetching similar products:", error);
      });
  };

  useEffect(() => {
    fetchApi(id);
    fetchSimilarProducts();
  }, [id]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div class="container my-5">
          <hr />
          <div class="row mt-5">
            <div class="col-md-5">
              <div class="main-img">
                <img class="img-fluid" src={product.image} alt="ProductS" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="main-description px-2">
                <div class="category text-bold">
                  Category: {product.category}
                </div>
                <div class="product-title text-bold my-3">{product.title}</div>

                <div class="price-area my-4">
                  <p class="old-price mb-1">
                    <del>
                      Rs.{" "}
                      {(product.price + (20 / product.price) * 100).toFixed(2)}
                    </del>{" "}
                    <span class="old-price-discount text-danger">
                      (20% off)
                    </span>
                  </p>
                  <p class="new-price text-bold mb-1">Rs. {product.price}</p>
                  <p class="text-secondary mb-1">
                    (Additional tax may apply on checkout)
                  </p>
                </div>

                <div class="buttons d-flex my-5">
                  <div class="block">
                    <a href="#" class="shadow btn custom-btn ">
                      Wishlist
                    </a>
                  </div>
                  <div class="block">
                    <button class="shadow btn custom-btn">Add to cart</button>
                  </div>

                  <div class="block quantity">
                    <input
                      type="number"
                      class="form-control"
                      id="cart_quantity"
                      value="1"
                      min="0"
                      max="5"
                      placeholder="Enter email"
                      name="cart_quantity"
                    />
                  </div>
                </div>
              </div>

              <div class="product-details my-4">
                <p class="details-title text-color mb-1">Product Details</p>
                <p class="description">{product.description} </p>
              </div>

              <div class="row questions bg-light p-3">
                <div class="col-md-1 icon">
                  <i class="fa-brands fa-rocketchat questions-icon"></i>
                </div>
                <div class="col-md-11 text">
                  Have a question about our products at E-Store? Feel free to
                  contact our representatives via live chat or email.
                </div>
              </div>

              <div class="delivery my-4">
                <p class="font-weight-bold mb-0">
                  <span>
                    <i class="fa-solid fa-truck"></i>
                  </span>{" "}
                  <b>Delivery done in 3 days from date of purchase</b>{" "}
                </p>
                <p class="text-secondary">
                  Order now to get this product delivery
                </p>
              </div>
              <div class="delivery-options my-4">
                <p class="font-weight-bold mb-0">
                  <span>
                    <i class="fa-solid fa-filter"></i>
                  </span>{" "}
                  <b>Delivery options</b>{" "}
                </p>
                <p class="text-secondary">View delivery options here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render similar products */}
      <div className="container similar-products my-4">
        <hr />
        <p className="display-5">Similar Products</p>
        <div className="row">
          {similar.map((e) => (
            <div className="col-md-3" key={e.id}>
              <NavLink
                to={`/product-detail/${e.id}`}
                className="similar-product-link"
              >
                <div className="similar-product">
                  <img className="w-100" src={e.image} alt="Preview" />
                  <p className="title">{e.title}</p>
                  <p className="price">Rs. {e.price}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;
