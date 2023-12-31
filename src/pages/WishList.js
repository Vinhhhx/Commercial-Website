import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const WishList = () => {
  return (
    <>
      <Meta title={"Wish List"} />
      <BreadCrumb title="Wish List" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="  px-2 py-3">
                <h5 className="title">
                  Honor T1 7.0.1 GB RAM 8GB 7 Inch With Wi-Fi + 3G Tablet{" "}
                </h5>
                <h6 className="price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="  px-2 py-3">
                <h5 className="title">
                  Honor T1 7.0.1 GB RAM 8GB 7 Inch With Wi-Fi + 3G Tablet{" "}
                </h5>
                <h6 className="price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="  px-2 py-3">
                <h5 className="title">
                  Honor T1 7.0.1 GB RAM 8GB 7 Inch With Wi-Fi + 3G Tablet{" "}
                </h5>
                <h6 className="price">$100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
