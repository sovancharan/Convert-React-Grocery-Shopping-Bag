import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const YourProfile = () => {
  return (
    <>
      {/* your profile  */}
      <div className="profile pb-5">
        {/* <div className="container"> */}
        <Container>
          <div className="d-flex justify-content-center  fw-bolder py-5">
            <h4 className="fw-bolder fs-3 pe-2">Your</h4>
            <h4 className="text-danger fw-bolder fs-3">Profile</h4>
          </div>
          {/* <div className="row"> */}
          <Row>
            {/* <div className="col-lg-4 col-sm-10 col-md-8"> */}
            <Col lg={4} sm={10} md={8}>
              <div className="bg-white rounded-3">
                <div className="d-flex container py-4">
                  <div>
                    <img src="static/img/profile.png" alt="" />
                  </div>
                  <div className="container pt-4">
                    <h6>hello</h6>
                    <h3>Danial</h3>
                  </div>
                </div>
              </div>
              <div className="seetings bg-white my-3">
                <div className="container d-flex rounded-3 pt-2 pb-1">
                  <div className="pe-3">
                    <img src="static/img/setting.png" alt="" />
                  </div>
                  <h5>Account settings</h5>
                </div>
              </div>
              <div className="seetings bg-white my-3">
                <div className="container d-flex rounded-3 pt-2 pb-1">
                  <div className="pe-3">
                    <img src="static/img/trams&condition.png" alt="" />
                  </div>
                  <h5>Trams and Condition</h5>
                </div>
              </div>
              <div className="seetings bg-white my-3">
                <div className="container d-flex rounded-3 pt-2 pb-1">
                  <div className="pe-3">
                    <img src="static/img/logout (2) 1.png" alt="" />
                  </div>
                  <h5>Sign Out</h5>
                </div>
              </div>
            </Col>
            {/* my wishlist  */}
            {/* <div className="col-lg-8 pb-5"> */}
            <Col lg={8} className="pb-5">
              <div>
                <h6>My Wishlist(24)</h6>
              </div>
              <hr />
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/meat.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>La Carne Mutton seekh kebab</h6>
                        <p>500g per tray</p>
                        <h5 className="text-danger">$16.75 ea</h5>
                        <p>400g avg.</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className=" row mx-auto  mb-3 gy-2">
                      <button
                        className="btn btn-danger col-lg-5 col-md-6 col-sm-5 me-4  fw-bold "
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/urban.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>La Carne Mutton seekh kebab</h6>
                        <p>500g per tray</p>
                        <h5 className="text-danger">$16.75 ea</h5>
                        <p>400g avg.</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className=" row mx-auto  mb-3 gy-2">
                      <button
                        className="btn btn-danger col-lg-5 col-md-6 col-sm-5 me-4  fw-bold "
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/coffe.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>La Carne Mutton seekh kebab</h6>
                        <p>500g per tray</p>
                        <h5 className="text-danger">$16.75 ea</h5>
                        <p>400g avg.</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className=" row mx-auto  mb-3 gy-2">
                      <button
                        className="btn btn-danger col-lg-5 col-md-6 col-sm-5 me-4  fw-bold "
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/ghe.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>La Carne Mutton seekh kebab</h6>
                        <p>500g per tray</p>
                        <h5 className="text-danger">$16.75 ea</h5>
                        <p>400g avg.</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    {/* <div className=" row mx-auto  mb-3 gy-2"> */}
                    <Row className=" row mx-auto  mb-3 gy-2">
                      <button
                        className="btn btn-danger col-lg-5 col-md-6 col-sm-5 me-4  fw-bold "
                        type="button"
                      >
                        Add to cart
                      </button>
                    </Row>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/meat.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>La Carne Mutton seekh kebab</h6>
                        <p>500g per tray</p>
                        <h5 className="text-danger">$16.75 ea</h5>
                        <p>400g avg.</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className=" row mx-auto  mb-3 gy-2">
                      <button
                        className="btn btn-danger col-lg-5 col-md-6 col-sm-5 me-4  fw-bold "
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default YourProfile;
