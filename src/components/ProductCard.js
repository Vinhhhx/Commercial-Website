import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/garmin-watch.webp";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
function ProductCard(props) {
  let location = useLocation();
  const { grid } = props;
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `grid-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productimage" />
            <img src={watch2} className="img-fluid" alt="productimage" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              {" "}
              Back to school with the most appropriate choice{" "}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non enim tempor, volutpat tellus elementum, sagittis diam. Integer
              condimentum eu nisl ac imperdiet. Fusce dui quam, euismod quis
              pretium nec, fringilla sit amet massa. Maecenas leo massa,
              fermentum vitae eros vestibulum, pretium gravida turpis.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `grid-${grid}` : "col-3"
        }`}
      >
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname === "/product/:id" ? "/product/:id":":id"}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productimage" />
            <img
              src="images/garmin-watch.webp"
              className="img-fluid"
              alt="productimage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              {" "}
              Back to school with the most appropriate choice{" "}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non enim tempor, volutpat tellus elementum, sagittis diam. Integer
              condimentum eu nisl ac imperdiet. Fusce dui quam, euismod quis
              pretium nec, fringilla sit amet massa. Maecenas leo massa,
              fermentum vitae eros vestibulum, pretium gravida turpis.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
