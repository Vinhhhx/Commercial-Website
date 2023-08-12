import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container className="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A beautiful sunday morning renaissance</h3>
              <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
              <p>
                Dịch vụ này sẽ sử dụng 1 máy scan để quét bàn tay của khách hàng
                để có thể hiển thị định danh, trả tiền hàng hoặc truy cập vào
                các ưu đãi của gói Prime. Việc họ mở rộng công nghệ này là bởi
                theo đánh giá trước đó có nhiều khách hàng hài lòng với kiểu trả
                tiền này tại những điểm thử nghiệm ở Amazon Fresh và Panera
                Bread.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
