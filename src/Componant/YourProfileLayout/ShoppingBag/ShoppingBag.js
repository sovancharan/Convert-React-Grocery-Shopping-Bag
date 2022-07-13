import React from "react";
import "Static/Css/style.css";
import { Col, Container, Row } from "react-bootstrap";
// import Row from 'react-bootstrap'

const ShoppingBag = (props) => {
    // console.log(bagData.Bag)
  return (
    <>
      {/* shopping bag  */}

      <div className="shopping-bag pb-5">
        {/* <div className="container"> */}
        <Container>
          <div className="d-flex justify-content-center py-5">
            <h3>{props.bagData.yourShopping}</h3>
            <h3 className="text-danger ps-2">{props.bagData.Bag}</h3>
          </div>

          {/* <div className="row "> */}
          <Row>
            {/* <div className="col-lg-8 col-md-8 col-sm-8   pb-5 "> */}
            <Col lg={8} md={8} sm={8}>
              <div>
                <h6>{props.bagData.itemDetails}</h6>
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
                        <h6>{props.bagData.itemHeading}</h6>
                        <p>{props.bagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {props.bagData.itemPrice}
                        </h5>
                        <p>{props.bagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {props.bagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {props.bagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {props.bagData.incBtn}
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/coffe.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>{props.bagData.itemHeading}</h6>
                        <p>{props.bagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {props.bagData.itemPrice}
                        </h5>
                        <p>{props.bagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {props.bagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {props.bagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {props.bagData.incBtn}
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr />
                </div>
              </div>
              <div className="d-flex ">
                <div>
                  <img className="img-fluid" src="static/img/meat.png" alt="meat" />
                </div>
                <div className="w-100">
                  <div className="ps-4 ">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>{props.bagData.itemHeading}</h6>
                        <p>{props.bagData.itemquantity}</p>
                        <h5 className="text-danger">
                          {props.bagData.itemPrice}
                        </h5>
                        <p>{props.bagData.itemweight}</p>
                      </div>
                      <div>
                        <img className="img-fluid" src="static/img/quit 1.png" alt="" />
                      </div>
                    </div>

                    <div className="inc-dec-btn pb-4 pt-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example bg-white "
                      >
                        <button
                          type="button"
                          className="btn btn-outline-none bg-white  py-0 my-0 rounded-3"
                        >
                          {props.bagData.decBtn}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3"
                        >
                          {props.bagData.val}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline bg-white rounded-3"
                        >
                          {props.bagData.incBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-grid gap-2 col-6  py-4 ">
                <button className="btn btn-danger" type="button">
                  {props.bagData.button}
                </button>
              </div>
            </Col>

            <Col lg={4} md={4}>
              <div className="pt-1 pb-1">
                <h6>{props.orderSummaryData.OrderSummeryHeading}</h6>
              </div>
              <div className="bg-white rounded-3 container py-3 ">
                <div className="d-flex justify-content-between">
                  <div>Sub-total:</div>
                  <div>{props.orderSummaryData.SubTotal}</div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div>Shipping:</div>
                  <div>{props.orderSummaryData.Shipping}</div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div>Coupon discount:</div>
                  <div className="text-danger">Apply Coupon</div>
                </div>

                <div className="d-flex justify-content-between py-2">
                  <div>vat(15%):</div>
                  <div>{props.orderSummaryData.Vat}</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>Total amount:</div>
                  <div>{props.orderSummaryData.TotalAmount}</div>
                </div>
              </div>

              <div className="d-grid gap-2 col-12 mx-auto py-3">
                <button className="btn btn-danger" type="button">
                  {props.orderSummaryData.CheckOut}
                </button>
              </div>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
        {/* </div> */}
      </div>
    </>
  );
};

export default ShoppingBag;
