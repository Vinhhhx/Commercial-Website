import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.00 or $41.62/month</p>
                <Link className="button">PURCHASE NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Macbook Pro M2</h5>
                  <p>
                    From $1999.00 <br /> or $99.99/month
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599 <br /> or $49.91/month
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Apple Watch S7</h5>
                  <p>
                    Shop the latest band <br /> styles and colors
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Pro Max</h5>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-10" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="laptop" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="TV" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/tv.jpg" alt="TV" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="gaming" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid "
                src="https://gadgetguy-assets.s3.ap-southeast-2.amazonaws.com/wordpress/wp-content/uploads/2022/07/11144941/Apple-products-expected-in-2022-and-2023.jpg"
                alt="famous-banner"
              />
              <div className="famous-content position-absolute">
                <h5>Apple Products</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/macbook.jpg"
                alt="famous-banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/imac.jpg"
                alt="famous-banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Mac Studio</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FKN73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1647901229415"
                alt="famous-banner"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Apple Watch</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <div className="card"></div>
          </div>
          <div className="col-2">
            <div className="card"></div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
