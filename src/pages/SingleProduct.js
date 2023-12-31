import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/49-cell-titanium-ocean-yellow-ultra?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1660787511381"
                      className="img-fluid"
                      alt=""
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 ">
              <div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFMQ-m7UKjc7pqyqurRMVZce4Pa0ZYNQrC0X94rr_YdA7M1dAD4cx-VLlwte750zvY0vkvZyZ4gpxvvFPOtKVj9m0Cl_1RgvM3d1t17qptYZG1pqv7yPZaYA&usqp=CAc"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFMQ-m7UKjc7pqyqurRMVZce4Pa0ZYNQrC0X94rr_YdA7M1dAD4cx-VLlwte750zvY0vkvZyZ4gpxvvFPOtKVj9m0Cl_1RgvM3d1t17qptYZG1pqv7yPZaYA&usqp=CAc"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQt8yY5UDyFGcyErOaBcjn27-Vk6IGTjeR6NJhuexeMwjFvG8Pk8a5o6LeptWMki3fhw3DgDyuFdLBxY1Xpwl3lulp8C5w576LTUPLHbfaEgOMSkM5UpuGHzA&usqp=CAc"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQt8yY5UDyFGcyErOaBcjn27-Vk6IGTjeR6NJhuexeMwjFvG8Pk8a5o6LeptWMki3fhw3DgDyuFdLBxY1Xpwl3lulp8C5w576LTUPLHbfaEgOMSkM5UpuGHzA&usqp=CAc"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categories :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">GFd</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary  ">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 " />
                      Add to compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart />
                      Add to Wish List
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free Shipping and returns available on all orders ! <br />
                    We ship all US domestic orders within{" "}
                    <b>5-10 business days</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Copy Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard("");
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <h4>Description</h4>
              <p className="bg-white p-3">
                Lúc đó tài khoản người dùng sẽ được tích hợp thông tin về bàn
                tay và khi thanh toán người dùng chỉ cần vẩy tay là xong. Amazon
                cho biết đây là 1 công nghệ an toàn và bảo mật để thanh toán ở
                các cửa hàng bởi những thông tin quét được từ bàn tay sẽ được
                tạo nên 1 dạng nhận biết độc nhất và khác với những kiểu nhận
                dạng như vân tay hay quét khuôn mặt, vốn là thứ đang bị coi là
                sẽ gây ảnh hưởng đến quyền riêng tư của người dùng.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href=" ">
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Devin Booker</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Reasonable Price with modern gadget , i think i will buy
                    equipments at your store again in the future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
